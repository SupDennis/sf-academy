    namespace Agora.Entity
    {
        public  class Insegnante : EntityBase, Persona
        {
            public string Nome { get; set; }
            public string Cognome { get; set; }
            public string Mail {set;get;} = string.Empty;
            public  int Fk_Utente;
        }
    }