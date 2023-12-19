﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CraneSim.Core.Dtos.Gantry
namespace CraneSim.Core.Dtos.Crane
{
    public class GantryResponseDto
    {
        [JsonPropertyName("meta")]
        public GantryResponseMetaDto Meta { get; set; }

        [JsonPropertyName("msg")]
        public GantryResponseMsgDto Msg { get; set; }
        [JsonPropertyName("absolutePosition")]
        public GantryResponseAbsolPosDto AbsolutePosition { get; set; }
    }
}
