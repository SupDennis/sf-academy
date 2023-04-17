namespace Agora.Entity
{
    public class Genitore : EntityBase
    {
        public DateTime? Data_Di_Nascita {set;get;}

        public string Mail {set;get;} = string.Empty;

        public int Fk_Utente;
    }
}