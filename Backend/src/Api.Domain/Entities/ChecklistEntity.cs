using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;

namespace Api.Domain.Entities
{
    public class ChecklistEntity : BaseEntity
    {
        public string ItemDescription { get; set; }
        public bool Checked { get; set; } = false;
        public Guid SubjectId { get; set; }
    }
}