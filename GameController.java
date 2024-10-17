@RestController
@RequestMapping("/api/games")
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping
    public List<Game> searchGames(@RequestParam String search) {
        return gameService.searchGames(search);
    }
}
