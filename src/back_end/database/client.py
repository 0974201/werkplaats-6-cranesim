from pymongo import MongoClient
from datetime import datetime
import ast
import pytz
from dotenv import load_dotenv
from time import time as epoch_time
import os


class Client:
    def __init__(self) -> None:
        self.session_ID = int(epoch_time())
        load_dotenv()
        self.uri = os.getenv("DB_URI")
        self.certificate = os.path.join(os.path.dirname(__file__), "certificate/admin.pem")
        self.client = MongoClient(self.uri, tls=True, tlsCertificateKeyFile=self.certificate)
        self.database = self.client["st-2324-1-d-wx1-t2-2324-wx1-bear"]

    def insert_document(self, msg: dict) -> dict:
        timezone = pytz.timezone("Europe/Amsterdam")
        datetime_insertion = datetime.now(timezone)

        formatted_datetime_insertion = datetime_insertion.strftime("%Y-%m-%d/%H:%M:%S")
        document = {
            "sessionID": self.session_ID,
            "datetime": formatted_datetime_insertion,
            "msg": msg
        }

        try:
            topic = msg["meta"]["topic"]
        except KeyError:
            topic = "no_topic"

        insertion = {
            "inserted": bool,
            "document": object
        }

        try:
            insert_one_result = self.database[topic].insert_one(document)
            insertion["document_id"] = insert_one_result.inserted_id
            insertion["inserted"] = True
        except Exception:
            insertion["document_id"] = None
            insertion["inserted"] = False
            raise Exception
        finally:
            return insertion

    def find_document(self, topic, query=None):
        found_document = {
            "document": self.database[topic].find_one(filter=query)
        }
        return found_document
