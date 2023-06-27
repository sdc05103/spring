package hello.hellospring.controller;

import hello.hellospring.domain.Member;
import hello.hellospring.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class MemberController{
    //hi
    private final MemberService memberService;
    @Autowired  //스프링 컨테이너에서 가져옴, 연결에 사용
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/join")
    public String createForm(){
        return "members/createMemberForm";
    }

    @PostMapping("/join")
    public String create(MemberForm form) {
        Member member = new Member();
        member.setName(form.getName());
        member.setId(form.getId());
        member.setPwd(form.getPwd());

        member.setPwdConfirm(form.getPwdConfirm());
        if (!member.getPwd().equals(member.getPwdConfirm())) {
            // 비밀번호와 비밀번호 확인이 일치하지 않는 경우 처리
            // 예를 들어, 비밀번호 오류 메시지를 보여주고 회원가입 폼으로 다시 이동할 수 있습니다.
            return "redirect:/join";
        } else {
            memberService.join(member);
            return "redirect:/";
        }
    }
    @GetMapping("/members")
    public String list(Model model){
        List<Member> members = memberService.findMembers();
        model.addAttribute("members", members);
        return "members/memberList";
    }

}