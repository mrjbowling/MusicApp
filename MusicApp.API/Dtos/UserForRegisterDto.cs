using System;
using System.ComponentModel.DataAnnotations;

namespace MusicApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(12, MinimumLength = 8, ErrorMessage = "You must specify password between 8 and 12 characters")]
        public string Password { get; set; }
        [Required]
        public string KnownAs {get; set; }
        public DateTime Created {get; set;}
        public DateTime LastActive {get; set;}

        public UserForRegisterDto() {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}