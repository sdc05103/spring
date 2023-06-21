package hello.hellospring.domain;

public class Member {
    private String id;

    private String pwd;

    private int grade;

    private String name;

    public int getGrade() {
        return grade;
    }

    public void  setGrade(int grade) {
        this.grade = grade;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

}
