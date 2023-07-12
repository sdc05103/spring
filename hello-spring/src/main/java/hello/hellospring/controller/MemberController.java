package hello.hellospring.controller;

import hello.hellospring.domain.Member;
import hello.hellospring.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Optional;

@Controller
public class MemberController {
    //hi!!
    private final MemberService memberService;

    @Autowired  //스프링 컨테이너에서 가져옴, 연결에 사용
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/join")
    public String createForm() {
        return "members/createMemberForm";
    }

    @PostMapping("/join")
    public String create(MemberForm form) {
        Member member = new Member();
        member.setName(form.getName());
        member.setId(form.getId());
        member.setPwd(form.getPwd());

        member.setPwdConfirm(form.getPwdConfirm());

        memberService.join(member);

        return "redirect:/";
    }

    @GetMapping("/login")
    public String joinForm() {
        return "members/login";
    }

    @PostMapping("/login")
    public String join(Member member) {
        String id = member.getId();
        String pwd = member.getPwd();

        Optional<Member> loginMember = memberService.login(id, pwd);

        if (!(loginMember.isPresent())) {
            // 로그인 실패 시(존재하는 아이디 없음)
            System.out.println("아이디가 일치하지 않습니다");
            return "redirect:/login";
        }
        else { //아이디는 일치
            member = loginMember.get();
            if(!(pwd.equals(member.getPwd()))){
                //아이디는 일치하나 비밀번호 불일치
                System.out.println("비밀번호가 일치하지 않습니다");
                return "redirect:/login";
            }
            //아이디, 비밀번호 모두 일치
            return "redirect:/";
        }
    }
}

