package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000") //CORS ERROR

@Controller
public class HomeController {
    @GetMapping("/")
    public String home(){
        return "home";
    }
}
