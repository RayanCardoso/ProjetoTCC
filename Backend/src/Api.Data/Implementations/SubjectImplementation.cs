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
    public class SubjectImplementation : BaseRepository<SubjectEntity>, ISubjectRepository
    {
        private DbSet<SubjectEntity> _dataset;

        public SubjectImplementation(MyContext context) : base(context)
        {
            _dataset = context.Set<SubjectEntity>();
        }

        public async Task<List<SubjectEntity>> GetAllByUser(Guid userId){
            return await _dataset.Where(d => d.UserId == userId).ToListAsync();
        }
    }
}