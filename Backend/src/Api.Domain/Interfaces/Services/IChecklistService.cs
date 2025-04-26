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
    public interface IChecklistService
    {
        Task<ChecklistResultDto> Get(Guid id);
        Task<IEnumerable<ChecklistResultDto>> GetAll(Guid subjectId);
        Task<ChecklistResultDto> Post(ChecklistPostDto subject);
        Task<ChecklistResultDto> Put(ChecklistPutDto subject);
        Task<bool> Delete(Guid id);
    
    }
}