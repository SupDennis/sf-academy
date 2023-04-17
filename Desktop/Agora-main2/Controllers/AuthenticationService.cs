using Microsoft.AspNetCore.Mvc;
using Agora.Entity;
using Agora.Utilities;


namespace Agora.Controllers{
   public class AuthenticationController : ControllerBase{
    private readonly Utente _userRequestingLogin;
    private readonly IConfiguration _configuration;

    public AuthenticationController(Utente userRequestingLogin, IConfiguration configuration)
    {
        _userRequestingLogin = userRequestingLogin;
        _configuration = configuration;
    }

    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> Login(Utente utente)
    {
        var user = DatabaseHelper.FindUtente(utente.Username);
        if (user == null)
        {
            return BadRequest("Invalid login attempt.");
        }

        if (!isPasswordCorrect(utente.Password, user.Password))
        {
            return BadRequest("Invalid login attempt.");
        }

        var token = GenerateToken(user);
        return Ok(new { access_token = token });
    }

    private bool isPasswordCorrect(string password, string utentePassword)
    {
        // TODO: implementare la logica di verifica della password 
        return password == utentePassword;
    }

    private string GenerateToken(Utente utente)
    {
        
        return "jkdh";
    }
}

}