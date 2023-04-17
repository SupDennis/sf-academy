using Dapper;
using MySql.Data.MySqlClient;
using Agora.Entity;

namespace Agora.Utilities
{
    public static class DatabaseHelper
    {
        private static string _dbConnectionString = String.Empty;
        public static string ConnectionString  {
            get{
                return _dbConnectionString;
            }
            set{
                _dbConnectionString = value;
            }
        }

        //find utente by username or mail
        public static Utente FindUtente(string nickName){ //nickname can be username or mail
            string sqlForFindUntenteByUsername = "SELECT * FROM Users WHERE Username = @nickName";
            string sqlForFindUtenteBymail = "SELECT * FROM Users WHERE Mail = @nickName";

            try{
                using (var connection = new MySqlConnection(ConnectionString))
                {
                    var UtenteByUsername = connection.Query<Utente>(sqlForFindUntenteByUsername , new {Username = nickName}).FirstOrDefault();

                    if (UtenteByUsername is not null)
                        return UtenteByUsername;
                    return connection.Query<Utente>(sqlForFindUtenteBymail , new {Mail = nickName}).FirstOrDefault();
                }
            } catch(Exception ex){
                return null;
                //TODO MANAGE EXCEPTION TO RETURN
            }
        }
    }
}