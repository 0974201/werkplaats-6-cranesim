﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Controller.wpf
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
        private void Window_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.W)
            {
                infoLabel.Content = "Trolley forward!";
            }
            if (e.Key == Key.S)
            {
                infoLabel.Content = "Trolley backwards!";
            }

            if (e.Key == Key.A) 
            {
                infoLabel.Content = "Gantry left!";
            }
            if (e.Key == Key.D)
            {
                infoLabel.Content = "Gantry right!";
            }

            if (e.Key == Key.Up)
            {
                infoLabel.Content = "Hoist up!";
            }
            if (e.Key == Key.Down)
            {
                infoLabel.Content = "Hoist down!";
            }


            if (e.Key == Key.Q)
            {
                infoLabel.Content = "Boom Up!";
            }
            if (e.Key == Key.E)
            {
                infoLabel.Content = "Boom Down!";
            }
        }
    }
}
