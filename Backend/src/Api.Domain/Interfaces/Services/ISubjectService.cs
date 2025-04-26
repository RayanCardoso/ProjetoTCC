using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Domain.Dto;
using Api.Domain.Dto.Setor;
using Api.Domain.Dto.Subject;
using Api.Domain.Dto.User;
using Api.Domain.Entities;

namespace Api.Domain.Interfaces.Services
{
    public interface ISubjectService
    {
        Task<SubjectResultDto> Get(Guid id);
        Task<IEnumerable<SubjectResultDto>> GetAll(Guid userId);
        Task<SubjectResultDto> Post(SubjectPostDto subject);
        Task<SubjectResultDto> Put(SubjectPutDto subject);
        Task<bool> Delete(Guid id);
    
    }
}