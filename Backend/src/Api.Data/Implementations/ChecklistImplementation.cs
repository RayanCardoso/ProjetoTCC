using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Data.Context;
using Api.Data.Repository;
using Api.Domain.Dto;
using Api.Domain.Entities;
using Api.Domain.Interfaces.Repository;
using Microsoft.EntityFrameworkCore;

namespace Api.Data.Implementations
{
    public class ChecklistImplementation : BaseRepository<ChecklistEntity>, IChecklistRepository
    {
        private DbSet<ChecklistEntity> _dataset;

        public ChecklistImplementation(MyContext context) : base(context)
        {
            _dataset = context.Set<ChecklistEntity>();
        }

        public async Task<List<ChecklistEntity>> GetAllBySubject(Guid subjectId){
            return await _dataset.Where(d => d.SubjectId == subjectId).ToListAsync();
        }
    }
}