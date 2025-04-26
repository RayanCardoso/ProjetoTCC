using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;

namespace Api.Domain.Entities
{
    public class SubjectEntity : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public UserEntity User { get; set; }
        public Guid UserId { get; set; }
    }
}