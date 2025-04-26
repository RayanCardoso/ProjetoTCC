using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Domain.Dto;
using Api.Domain.Entities;

namespace Api.Domain.Interfaces.Repository
{
    public interface IChecklistRepository : IRepository<ChecklistEntity>
    {
        Task<List<ChecklistEntity>> GetAllBySubject(Guid subjectId);
    }
}