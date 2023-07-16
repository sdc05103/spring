//package hello.hellospring.dto;
//
//@Data
//public class MemberDTO {
//
//    //private Long id;
//    private String userName;
//    private String userId;
//    private String password;
//    private String passwordConfirm;
//
//    private MemberDTO() {
//    }
//
//    public static class Builder {
//
//        private String userName;
//        private String userId;
//        private String password;
//        private String passwordConfirm;
//
//        public Builder(String userName, String userId, String password) {
//            this.userName = userName;
//            this.userId = userId;
//            this.password = password;
//        }
//
//        public Builder setPasswordConfirm(String passwordConfirm) {
//            this.passwordConfirm = passwordConfirm;
//            return this;
//        }
//
//        public MemberDTO build() {
//            MemberDTO memberDTO = new MemberDTO();
//            memberDTO.userName = userName;
//            memberDTO.userId = userId;
//            memberDTO.password = password;
//            memberDTO.passwordConfirm = passwordConfirm;
//            return memberDTO;
//        }
//    }
//}
