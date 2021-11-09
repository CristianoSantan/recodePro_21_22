using Microsoft.EntityFrameworkCore;
using PessoaAPI.Controllers.Models;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

namespace PessoaAPI.Data
{
    public class PessoaContext : DbContext // necesitames que ele sea um debe context
    {
        //construtos 
        //recibimos nuestra opciones  para criar = parametros 
        // e qual e o conttexto que estamos traballando <>
        // opt sao nuestras opcoes
        // passamos eses parametros para o construtor do DbContext
        public PessoaContext(DbContextOptions<PessoaContext> opt) : base(opt) 
        {

        }
        public DbSet<Pessoa> Pessoas {get; set;}  // aqui a gente ja crio noso context
        // nossa prodiedade = nosso conjunto de dados = donde vamos a hacer bem encapsulado o axeso aos dados de ese banco

        // DbSet vai mapear noso objeto pessoa e acessar dentro de nosso banco
        // llamamos essa propiedade de Pessoas
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connectionString = "server=localhost;database=PessoaDB;user=root;password=7154";
            optionsBuilder.UseMySql(connectionString, new MySqlServerVersion(new System.Version(8, 0, 22)), mySqlOptions => mySqlOptions.CharSetBehavior(CharSetBehavior.NeverAppend));
        }
    }
}