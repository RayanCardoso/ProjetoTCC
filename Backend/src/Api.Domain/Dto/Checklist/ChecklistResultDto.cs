using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Domain.Dto.Subject
{
    public class ChecklistResultDto
    {
        public Guid Id { get; set; }
        public string ItemDescription { get; set; }
        public bool Checked { get; set; }
        public Guid SubjectId { get; set; }
    }
}