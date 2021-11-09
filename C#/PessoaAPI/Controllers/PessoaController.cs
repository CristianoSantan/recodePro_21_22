using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc; // ApiController como o Route
using PessoaAPI.Controllers.Models;
using PessoaAPI.Data;

namespace PessoaAPI.Controllers
{
    [ApiController] // Definimos a classe como um controlador
    [Route("[Controller]")] // /pessoa vai ser a rota
    public class PessoaController : ControllerBase // extendemos da clase 
    {
        private readonly PessoaContext _context; // um campo de tipo PESSOA
        
        // Incicializamos via construtor
        public PessoaController(PessoaContext context){
            _context = context;
        }

        // Criar um recurso - como o Post - verbo especifico Http
        [HttpPost] // acao do controlador
        public async Task<ActionResult<Pessoa>> AdicionarPessoa([FromBody] Pessoa pessoa) // Usuario - Parametro - Models pessoa - informacoes
        {
            _context.Pessoas.Add(pessoa);
            await _context.SaveChangesAsync();
            return pessoa;
        }


        [HttpGet]
        public IActionResult RecuperaPessoas(){
            return Ok(_context.Pessoas);
        }


        [HttpGet("{id}")]
        public IActionResult RecuperaPessoaPorId(int id)
        {
            Pessoa pessoa = _context.Pessoas.FirstOrDefault(pessoa => pessoa.Id == id);
            if(pessoa != null){
                return Ok(pessoa);
            }
            return NotFound();
        }


        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, [FromBody] Pessoa novosDados){
            Pessoa pessoa = _context.Pessoas.FirstOrDefault(pessoa => pessoa.Id == id);
            if(pessoa == null){
                return NotFound();
            }
            pessoa.Nome = novosDados.Nome;
            pessoa.Sobrenome = novosDados.Sobrenome;
            pessoa.idade = novosDados.idade;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id){
            Pessoa pessoa = _context.Pessoas.FirstOrDefault(pessoa => pessoa.Id == id);
            if(pessoa == null){
                return NotFound();
            }
            _context.Remove(pessoa);
            _context.SaveChanges();
            return NoContent();
        }

    }
}