using ApplicationCore.Dtos;
using AutoMapper;
using ApplicationCore.Entities;

namespace Web.Utils
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Customer, CustomerDto>().ReverseMap();
            CreateMap<Order, OrderDto>().ReverseMap();
        }
    }
}