@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    public List<Game> searchGames(String search) {
        return gameRepository.findByTitleContainingIgnoreCase(search);
    }
}
