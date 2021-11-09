using System;
using System.ComponentModel.DataAnnotations;

namespace PessoaAPI.Controllers.Models
{
    public class Pessoa
    {
        // Validadores de entra
        [Key] // identificador unico
        [Required]
        public int Id { get; set; }
        [Required(ErrorMessage = "O campo Nome é Obrigatório")]
        public string Nome { get; set; }
        [Required]
        public string Sobrenome { get; set; }
        [Range(1, 120, ErrorMessage = "A idade maxima e de 120 anos")]
        public int idade { get; set; } 
    }
}