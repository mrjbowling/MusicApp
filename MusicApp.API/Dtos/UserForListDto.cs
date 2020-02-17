using System;

namespace MusicApp.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string KnownAs {get; set;}
        public DateTime Created {get; set;}
        public DateTime LastActive {get; set;}
    }
}