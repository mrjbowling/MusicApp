using AutoMapper;
using MusicApp.API.Dtos;
using MusicApp.API.Models;

namespace MusicApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
        }
    }
}