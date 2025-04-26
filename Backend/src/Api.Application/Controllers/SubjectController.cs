using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Api.Domain.Dto.Setor;
using Api.Domain.Dto.Subject;
using Api.Domain.Dto.User;
using Api.Domain.Entities;
using Api.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Application.Controllers
{   
    [Route ("api/[controller]")]
    [ApiController]
    public class SubjectController : ControllerBase
    {
        private ISubjectService _service;

        public SubjectController (ISubjectService service){
            _service = service;
        }

        [Authorize("Bearer")]
        [HttpGet]
        [Route ("User/{userId}")]
        public async Task<ActionResult> GetAll(Guid userId){
            
            if(!ModelState.IsValid){
                return BadRequest(ModelState); //400 bad request - Solicitação Inválida
            }

            try{
                return Ok(await _service.GetAll(userId));
            }
            catch(ArgumentException e)
            {
                return StatusCode ((int) HttpStatusCode.InternalServerError, e.Message);
            }
        }
        
        [Authorize("Bearer")]
        [HttpGet]
        [Route ("{id}", Name = "GetSubjectWithId")]

        public async Task<ActionResult> Get(Guid id){

            if(!ModelState.IsValid){
                return BadRequest(ModelState); //400 bad request - Solicitação Inválida
            }

            try{
                return Ok(await _service.Get(id));
            }catch(ArgumentException e)
            {
                return StatusCode((int) HttpStatusCode.InternalServerError, e.Message);
            }

        }

        [HttpPost]
        
        public async Task<IActionResult> Post([FromBody] SubjectPostDto subject){

            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }

            try{
                var result = await _service.Post(subject);

                if(result != null){
                    return Ok(result);
                }

                else{
                    return BadRequest();
                }

            }catch(ArgumentException e){
                return StatusCode((int) HttpStatusCode.InternalServerError, e.Message);
            }
        }

        [Authorize("Bearer")]
        [HttpPut]

        public async Task<IActionResult> Put([FromBody] SubjectPutDto subject){

            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }

            try{

                var result = await _service.Put(subject);

                if(result != null){
                    return Ok(result);
                }else{
                    return BadRequest();
                }

            }catch(ArgumentException e){
                return StatusCode((int) HttpStatusCode.InternalServerError, e.Message);
            }
        }

        [Authorize("Bearer")]
        [HttpDelete("{id}")]

        public async Task<IActionResult> Delete(Guid id){
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }

            try{
                bool result = await _service.Delete(id);
                if(result){
                    return Ok();
                }else{
                    return BadRequest();
                }

            }catch(ArgumentException e){
                return StatusCode((int) HttpStatusCode.InternalServerError, e.Message);
            }
        }
    }
}