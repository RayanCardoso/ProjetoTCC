using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Domain.Dto.Subject
{
    public class SubjectPostDto
    {
        [Required(ErrorMessage = "Nome é campo obrigatório!")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Descrição é um campo obrigatório")]
        public string Description { get; set; }

        [Required(ErrorMessage = "UserId é um campo obrigatório")]
        public Guid UserId { get; set; }
    }
}