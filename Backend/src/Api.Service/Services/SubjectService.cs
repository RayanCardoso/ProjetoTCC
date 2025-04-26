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
    public class SubjectService : ISubjectService
    {

        private ISubjectRepository _repository;
        private readonly IMapper _mapper;

        public SubjectService(ISubjectRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<bool> Delete(Guid id)
        {
            return await _repository.DeleteAsync(id);
        }

        public async Task<SubjectResultDto> Get(Guid id)
        {
            SubjectEntity entity = await _repository.SelectAsync(id);

            return _mapper.Map<SubjectResultDto>(entity);
        }

        public async Task<IEnumerable<SubjectResultDto>> GetAll(Guid userId)
        {
            var listEntity = await _repository.GetAllByUser(userId);

            var dto = _mapper.Map<IEnumerable<SubjectResultDto>>(listEntity);

            return dto;
        }

        public async Task<SubjectResultDto> Post(SubjectPostDto subject)
        {
            var entity = _mapper.Map<SubjectEntity>(subject);

            var result = await _repository.InsertAsync(entity);

            return _mapper.Map<SubjectResultDto>(result);
        }

        public async Task<SubjectResultDto> Put(SubjectPutDto subject)
        {
            var entity = _mapper.Map<SubjectEntity>(subject);

            var result = await _repository.UpdateAsync(entity);

            return _mapper.Map<SubjectResultDto>(result);
        }
    }
}