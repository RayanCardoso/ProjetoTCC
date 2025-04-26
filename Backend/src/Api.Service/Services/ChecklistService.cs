using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Domain.Dto;
using Api.Domain.Dto.Setor;
using Api.Domain.Dto.User;
using Api.Domain.Entities;
using Api.Domain.Interfaces;
using Api.Domain.Interfaces.Services;
using Npgsql.TypeMapping;
using AutoMapper;
using Api.Domain.Models.User;
using BCrypt.Net;
using Api.Domain.Interfaces.Repository;
using Api.Domain.Dto.Subject;

namespace Api.Service.Services
{
    public class ChecklistService : IChecklistService
    {

        private IChecklistRepository _repository;
        private readonly IMapper _mapper;

        public ChecklistService(IChecklistRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<bool> Delete(Guid id)
        {
            return await _repository.DeleteAsync(id);
        }

        public async Task<ChecklistResultDto> Get(Guid id)
        {
            ChecklistEntity entity = await _repository.SelectAsync(id);

            return _mapper.Map<ChecklistResultDto>(entity);
        }

        public async Task<IEnumerable<ChecklistResultDto>> GetAll(Guid subjectId)
        {
            var listEntity = await _repository.GetAllBySubject(subjectId);

            var dto = _mapper.Map<IEnumerable<ChecklistResultDto>>(listEntity);

            return dto;
        }

        public async Task<ChecklistResultDto> Post(ChecklistPostDto checklist)
        {
            var entity = _mapper.Map<ChecklistEntity>(checklist);

            var result = await _repository.InsertAsync(entity);

            return _mapper.Map<ChecklistResultDto>(result);
        }

        public async Task<ChecklistResultDto> Put(ChecklistPutDto checklist)
        {
            var entity = _mapper.Map<ChecklistEntity>(checklist);

            var result = await _repository.UpdateAsync(entity);

            return _mapper.Map<ChecklistResultDto>(result);
        }
    }
}