using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Domain.Dto.Subject
{
    public class ChecklistPostDto
    {
        [Required(ErrorMessage = "A descrição do check é campo obrigatório!")]
        public string ItemDescription { get; set; }

        [Required(ErrorMessage = "SubjectId é um campo obrigatório")]
        public Guid SubjectId { get; set; }
    }
}