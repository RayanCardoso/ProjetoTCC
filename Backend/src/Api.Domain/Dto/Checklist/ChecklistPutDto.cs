using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Domain.Dto.Subject
{
    public class ChecklistPutDto
    {
        [Required(ErrorMessage = "Id é campo obrigatório!")]
        public Guid Id { get; set; }
        
        [Required(ErrorMessage = "A descrição do check é campo obrigatório!")]
        public string ItemDescription { get; set; }

        [Required(ErrorMessage = "Checked é campo obrigatório!")]
        public bool Checked { get; set; }

        [Required(ErrorMessage = "SubjectId é um campo obrigatório")]
        public Guid SubjectId { get; set; }
    }
}