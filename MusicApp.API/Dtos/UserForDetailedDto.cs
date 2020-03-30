using System;
using System.ComponentModel.DataAnnotations;
using MusicApp.API.Models;

namespace MusicApp.API.Dtos
{
    public class UserForDetailedDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string KnownAs {get; set; }
        public DateTime Created {get; set;}
        public DateTime LastActive {get; set;}
    }
}