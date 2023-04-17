namespace Agora.Entity
{
    public class Figlio : Persona
    {
        public string Nome { get; set; }
        public string Cognome { get; set; }
        public DateTime? Data_Di_Nascita {set;get;}
        public int Fk_Classe;
    }
}