using System;

namespace MusicApp.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string KnownAs {get; set;}
        public DateTime Created {get; set;}
        public DateTime LastActive {get; set;}
    }
}