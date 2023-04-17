namespace Agora.Entity
{
    public class Utente : EntityBase
    {
        public string Username {set;get;} = string.Empty;
        public string Password {set;get;} = string.Empty;

        public DateTime? Data_Creazione {set;get;}

        public DateTime? Data_Ultima_Modifica {set;get;}

        public int Fk_Ruolo;
    }
}