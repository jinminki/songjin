    let selectedBuilding = '';

    const gangFormData = {
        "A-1": {
            process: "갱폼 입고 및 지상조립",
            workDate: "2024-08-01",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김철수", role: "팀장", rank: "고급", contact: "010-1234-5678" },
                { name: "이영희", role: "팀원", rank: "중급", contact: "010-2345-6789" },
                { name: "박영수", role: "팀원", rank: "초급", contact: "010-3456-7890" }
            ],
            
        },
        "A-2": {
            process: "갱폼 고정 볼트 작업",
            workDate: "2024-08-02",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김민수", role: "팀장", rank: "고급", contact: "010-2234-5678" },
                { name: "이수진", role: "팀원", rank: "중급", contact: "010-3345-6789" },
                { name: "박정우", role: "팀원", rank: "초급", contact: "010-4456-7890" },
                { name: "정민호", role: "팀원", rank: "중급", contact: "010-5567-7891" }
            ],
         
        },
        "A-3": {
            process: "철근 및 거푸집 설치",
            workDate: "2024-08-03",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김영수", role: "팀장", rank: "고급", contact: "010-5234-5678" },
                { name: "이정민", role: "팀원", rank: "중급", contact: "010-6345-6789" },
                { name: "박진호", role: "팀원", rank: "초급", contact: "010-7456-7890" }
            ],
           
        },
        "A-4": {
            process: "콘크리트 타설",
            workDate: "2024-08-04",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "박준형", role: "팀장", rank: "고급", contact: "010-8234-5678" },
                { name: "김나희", role: "팀원", rank: "중급", contact: "010-9345-6789" },
                { name: "이정민", role: "팀원", rank: "초급", contact: "010-1456-7890" },
                { name: "최성민", role: "팀원", rank: "중급", contact: "010-2567-7891" },
                { name: "윤정훈", role: "팀원", rank: "초급", contact: "010-3678-7892" }
            ],
           
        },
        "A-5": {
            process: "콘크리트 양생",
            workDate: "2024-08-05",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "강태우", role: "팀장", rank: "고급", contact: "010-2234-5678" },
                { name: "서지수", role: "팀원", rank: "중급", contact: "010-3345-6789" },
                { name: "문지원", role: "팀원", rank: "초급", contact: "010-4456-7890" },
                { name: "한민희", role: "팀원", rank: "중급", contact: "010-5567-7891" },
                { name: "조성준", role: "팀원", rank: "초급", contact: "010-6678-7892" }
            ],
        
        },
        "A-6": {
            process: "인양장비에 갱폼지지",
            workDate: "2024-08-06",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김민재", role: "팀장", rank: "고급", contact: "010-5234-5678" },
                { name: "오하나", role: "팀원", rank: "중급", contact: "010-6345-6789" },
                { name: "최은서", role: "팀원", rank: "초급", contact: "010-7456-7890" },
                { name: "한유진", role: "팀원", rank: "중급", contact: "010-8567-7891" }
            ],
       
        },
        "A-7": {
            process: "갱폼 해체",
            workDate: "2024-08-07",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "송재호", role: "팀장", rank: "고급", contact: "010-8234-5678" },
                { name: "이유진", role: "팀원", rank: "중급", contact: "010-9345-6789" },
                { name: "박성민", role: "팀원", rank: "초급", contact: "010-1456-7890" },
                { name: "정윤호", role: "팀원", rank: "중급", contact: "010-2567-7891" }
            ],
        
        },
        "A-8": {
            process: "갱폼 인양",
            workDate: "2024-08-08",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "홍길동", role: "팀장", rank: "고급", contact: "010-2234-5678" },
                { name: "김하늘", role: "팀원", rank: "중급", contact: "010-3345-6789" },
                { name: "최다은", role: "팀원", rank: "초급", contact: "010-4456-7890" }
            ],
         
        },
        "A-9": {
            process: "갱폼 하부 케이지 설치",
            workDate: "2024-08-09",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김태희", role: "팀장", rank: "고급", contact: "010-5234-5678" },
                { name: "박세진", role: "팀원", rank: "중급", contact: "010-6345-6789" },
                { name: "김도훈", role: "팀원", rank: "초급", contact: "010-7456-7890" },
                { name: "신유나", role: "팀원", rank: "중급", contact: "010-8567-7891" }
            ],
       
        },
        "A-10": {
            process: "갱폼 분진망 설치",
            workDate: "2024-08-10",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김지훈", role: "팀장", rank: "고급", contact: "010-8234-5678" },
                { name: "이유나", role: "팀원", rank: "중급", contact: "010-9345-6789" },
                { name: "최승연", role: "팀원", rank: "초급", contact: "010-1456-7890" },
                { name: "박정민", role: "팀원", rank: "중급", contact: "010-2567-7891" }
            ],
        
        },
        "B-1": {
            process: "갱폼 입고 및 지상조립",
            workDate: "2024-08-11",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김영수", role: "팀장", rank: "고급", contact: "010-2234-5678" },
                { name: "이영미", role: "팀원", rank: "중급", contact: "010-3345-6789" },
                { name: "박종수", role: "팀원", rank: "초급", contact: "010-4456-7890" }
            ],
     
        },
        "B-2": {
            process: "갱폼 고정 볼트 작업",
            workDate: "2024-08-12",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "이정훈", role: "팀장", rank: "고급", contact: "010-2234-5679" },
                { name: "박정수", role: "팀원", rank: "중급", contact: "010-3345-6780" },
                { name: "정유진", role: "팀원", rank: "초급", contact: "010-4456-7891" },
                { name: "윤민수", role: "팀원", rank: "중급", contact: "010-5567-7892" }
            ],
     
        },
        "B-3": {
            process: "철근 및 거푸집 설치",
            workDate: "2024-08-13",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김영호", role: "팀장", rank: "고급", contact: "010-2234-5670" },
                { name: "이정민", role: "팀원", rank: "중급", contact: "010-3345-6781" },
                { name: "박성호", role: "팀원", rank: "초급", contact: "010-4456-7892" }
            ],
     
        },
        "B-4": {
            process: "콘크리트 타설",
            workDate: "2024-08-14",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "홍준표", role: "팀장", rank: "고급", contact: "010-2234-5671" },
                { name: "김진수", role: "팀원", rank: "중급", contact: "010-3345-6782" },
                { name: "이영수", role: "팀원", rank: "초급", contact: "010-4456-7893" },
                { name: "박상우", role: "팀원", rank: "중급", contact: "010-5567-7893" },
                { name: "윤상민", role: "팀원", rank: "초급", contact: "010-6678-7894" }
            ],
          
        },
        "B-5": {
            process: "콘크리트 양생",
            workDate: "2024-08-15",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김재민", role: "팀장", rank: "고급", contact: "010-2234-5672" },
                { name: "이현진", role: "팀원", rank: "중급", contact: "010-3345-6783" },
                { name: "박준우", role: "팀원", rank: "초급", contact: "010-4456-7894" }
            ],
         
        },
        "B-6": {
            process: "인양장비에 갱폼지지",
            workDate: "2024-08-16",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "정재훈", role: "팀장", rank: "고급", contact: "010-2234-5673" },
                { name: "이재현", role: "팀원", rank: "중급", contact: "010-3345-6784" },
                { name: "김정민", role: "팀원", rank: "초급", contact: "010-4456-7895" },
                { name: "윤호진", role: "팀원", rank: "중급", contact: "010-5567-7894" }
            ],
         
        },
        "B-7": {
            process: "갱폼 해체",
            workDate: "2024-08-17",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "최진호", role: "팀장", rank: "고급", contact: "010-2234-5674" },
                { name: "김지현", role: "팀원", rank: "중급", contact: "010-3345-6785" },
                { name: "박재우", role: "팀원", rank: "초급", contact: "010-4456-7896" },
                { name: "이재훈", role: "팀원", rank: "중급", contact: "010-5567-7895" },
                { name: "윤지훈", role: "팀원", rank: "초급", contact: "010-6678-7895" }
            ],
          
        },
        "B-8": {
            process: "갱폼 인양",
            workDate: "2024-08-18",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "정민수", role: "팀장", rank: "고급", contact: "010-2234-5675" },
                { name: "김재현", role: "팀원", rank: "중급", contact: "010-3345-6786" },
                { name: "이정수", role: "팀원", rank: "초급", contact: "010-4456-7897" }
            ],
         
        },
        "B-9": {
            process: "갱폼 하부 케이지 설치",
            workDate: "2024-08-19",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "정유진", role: "팀장", rank: "고급", contact: "010-2234-5676" },
                { name: "김동현", role: "팀원", rank: "중급", contact: "010-3345-6787" },
                { name: "박지훈", role: "팀원", rank: "초급", contact: "010-4456-7898" },
                { name: "이동현", role: "팀원", rank: "중급", contact: "010-5567-7896" }
            ],
        
        },
        "B-10": {
            process: "갱폼 분진망 설치",
            workDate: "2024-08-20",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김준호", role: "팀장", rank: "고급", contact: "010-2234-5677" },
                { name: "이유진", role: "팀원", rank: "중급", contact: "010-3345-6788" },
                { name: "박상훈", role: "팀원", rank: "초급", contact: "010-4456-7899" },
                { name: "김상우", role: "팀원", rank: "중급", contact: "010-5567-7897" },
                { name: "이정훈", role: "팀원", rank: "초급", contact: "010-6678-7896" }
            ],
       
        },
        "C-1": {
            process: "갱폼 입고 및 지상조립",
            workDate: "2024-08-21",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "정재호", role: "팀장", rank: "고급", contact: "010-2234-5678" },
                { name: "김민수", role: "팀원", rank: "중급", contact: "010-3345-6789" },
                { name: "이정훈", role: "팀원", rank: "초급", contact: "010-4456-7800" }
            ],
  
        },
        "C-2": {
            process: "갱폼 고정 볼트 작업",
            workDate: "2024-08-22",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김태훈", role: "팀장", rank: "고급", contact: "010-2234-5679" },
                { name: "이정수", role: "팀원", rank: "중급", contact: "010-3345-6790" },
                { name: "박민수", role: "팀원", rank: "초급", contact: "010-4456-7801" },
                { name: "윤성훈", role: "팀원", rank: "중급", contact: "010-5567-7898" }
            ],
        
        },
        "C-3": {
            process: "철근 및 거푸집 설치",
            workDate: "2024-08-23",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "최지훈", role: "팀장", rank: "고급", contact: "010-2234-5680" },
                { name: "김정훈", role: "팀원", rank: "중급", contact: "010-3345-6791" },
                { name: "이민수", role: "팀원", rank: "초급", contact: "010-4456-7802" },
                { name: "박상훈", role: "팀원", rank: "중급", contact: "010-5567-7899" }
            ],
        
        },
        "C-4": {
            process: "콘크리트 타설",
            workDate: "2024-08-24",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "이준호", role: "팀장", rank: "고급", contact: "010-2234-5681" },
                { name: "김지훈", role: "팀원", rank: "중급", contact: "010-3345-6792" },
                { name: "박재민", role: "팀원", rank: "초급", contact: "010-4456-7803" }
            ],
       
        },
        "C-5": {
            process: "콘크리트 양생",
            workDate: "2024-08-25",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "정우성", role: "팀장", rank: "고급", contact: "010-2234-5682" },
                { name: "김상민", role: "팀원", rank: "중급", contact: "010-3345-6793" },
                { name: "이진수", role: "팀원", rank: "초급", contact: "010-4456-7804" },
                { name: "윤세훈", role: "팀원", rank: "중급", contact: "010-5567-7900" }
            ],
        },
        "C-6": {
            process: "인양장비에 갱폼지지",
            workDate: "2024-08-26",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "정민호", role: "팀장", rank: "고급", contact: "010-2234-5683" },
                { name: "김현수", role: "팀원", rank: "중급", contact: "010-3345-6794" },
                { name: "이준영", role: "팀원", rank: "초급", contact: "010-4456-7805" },
                { name: "박지수", role: "팀원", rank: "중급", contact: "010-5567-7901" },
                { name: "윤준우", role: "팀원", rank: "초급", contact: "010-6678-7897" }
            ],
        },
        "C-7": {
            process: "갱폼 해체",
            workDate: "2024-08-27",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "정지훈", role: "팀장", rank: "고급", contact: "010-2234-5684" },
                { name: "김성훈", role: "팀원", rank: "중급", contact: "010-3345-6795" },
                { name: "이상훈", role: "팀원", rank: "초급", contact: "010-4456-7806" }
            ],
        },
        "C-8": {
            process: "갱폼 인양",
            workDate: "2024-08-28",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김동민", role: "팀장", rank: "고급", contact: "010-2234-5685" },
                { name: "이성호", role: "팀원", rank: "중급", contact: "010-3345-6796" },
                { name: "박진우", role: "팀원", rank: "초급", contact: "010-4456-7807" },
                { name: "정재훈", role: "팀원", rank: "중급", contact: "010-5567-7902" }
            ],
        },
        "C-9": {
            process: "갱폼 하부 케이지 설치",
            workDate: "2024-08-29",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "정우진", role: "팀장", rank: "고급", contact: "010-2234-5686" },
                { name: "김진우", role: "팀원", rank: "중급", contact: "010-3345-6797" },
                { name: "이성진", role: "팀원", rank: "초급", contact: "010-4456-7808" }
            ],
        },
        "C-10": {
            process: "갱폼 분진망 설치",
            workDate: "2024-08-30",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김준수", role: "팀장", rank: "고급", contact: "010-2234-5687" },
                { name: "이민수", role: "팀원", rank: "중급", contact: "010-3345-6798" },
                { name: "박상진", role: "팀원", rank: "초급", contact: "010-4456-7809" },
                { name: "정재민", role: "팀원", rank: "중급", contact: "010-5567-7903" }
            ],
        },
        "D-1": {
            process: "갱폼 입고 및 지상조립",
            workDate: "2024-08-31",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김우빈", role: "팀장", rank: "고급", contact: "010-9911-1234" },
                { name: "이민호", role: "팀원", rank: "중급", contact: "010-9922-2345" },
                { name: "박서준", role: "팀원", rank: "초급", contact: "010-9933-3456" },
                { name: "정해인", role: "팀원", rank: "초급", contact: "010-9944-4567" }
            ],
        },
        "D-2": {
            process: "갱폼 고정 볼트 작업",
            workDate: "2024-09-01",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "차은우", role: "팀장", rank: "고급", contact: "010-9955-5678" },
                { name: "김동욱", role: "팀원", rank: "중급", contact: "010-9966-6789" },
                { name: "이준기", role: "팀원", rank: "초급", contact: "010-9977-7890" },
                { name: "황정민", role: "팀원", rank: "초급", contact: "010-9988-8901" }
            ],
        },
        "D-3": {
            process: "철근 및 거푸집 설치",
            workDate: "2024-09-02",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "강하늘", role: "팀장", rank: "고급", contact: "010-9999-9012" },
                { name: "김지수", role: "팀원", rank: "중급", contact: "010-9111-0123" },
                { name: "박보검", role: "팀원", rank: "초급", contact: "010-9222-1234" },
                { name: "이종석", role: "팀원", rank: "초급", contact: "010-9333-2345" },
                { name: "김선호", role: "팀원", rank: "초급", contact: "010-9444-3456" }
            ],
        },
        "D-4": {
            process: "콘크리트 타설",
            workDate: "2024-09-03",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "박지훈", role: "팀장", rank: "고급", contact: "010-9555-4567" },
                { name: "이시언", role: "팀원", rank: "중급", contact: "010-9666-5678" },
                { name: "김성규", role: "팀원", rank: "초급", contact: "010-9777-6789" }
            ],
        },
        "D-5": {
            process: "콘크리트 양생",
            workDate: "2024-09-04",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "조인성", role: "팀장", rank: "고급", contact: "010-9888-7890" },
                { name: "이정재", role: "팀원", rank: "중급", contact: "010-9999-8901" },
                { name: "정경호", role: "팀원", rank: "초급", contact: "010-9111-9012" },
                { name: "박해진", role: "팀원", rank: "초급", contact: "010-9222-0123" }
            ],
        },
        "D-6": {
            process: "인양장비에 갱폼지지",
            workDate: "2024-09-05",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김수현", role: "팀장", rank: "고급", contact: "010-9333-1234" },
                { name: "박신혜", role: "팀원", rank: "중급", contact: "010-9444-2345" },
                { name: "윤시윤", role: "팀원", rank: "초급", contact: "010-9555-3456" },
                { name: "김지원", role: "팀원", rank: "초급", contact: "010-9666-4567" },
                { name: "이동욱", role: "팀원", rank: "초급", contact: "010-9777-5678" }
            ],
        },
        "D-7": {
            process: "갱폼 해체",
            workDate: "2024-09-06",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "조정석", role: "팀장", rank: "고급", contact: "010-9888-6789" },
                { name: "손예진", role: "팀원", rank: "중급", contact: "010-9999-7890" },
                { name: "유연석", role: "팀원", rank: "초급", contact: "010-9111-8901" }
            ],
        },
        "D-8": {
            process: "갱폼 인양",
            workDate: "2024-09-07",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "김희철", role: "팀장", rank: "고급", contact: "010-9222-9012" },
                { name: "한지민", role: "팀원", rank: "중급", contact: "010-9333-0123" },
                { name: "이성경", role: "팀원", rank: "초급", contact: "010-9444-1234" },
                { name: "강동원", role: "팀원", rank: "초급", contact: "010-9555-2345" },
                { name: "송중기", role: "팀원", rank: "초급", contact: "010-9666-3456" }
            ],
        },
        "D-9": {
            process: "갱폼 하부 케이지 설치",
            workDate: "2024-09-08",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "장동건", role: "팀장", rank: "고급", contact: "010-9777-4567" },
                { name: "이영애", role: "팀원", rank: "중급", contact: "010-9888-5678" },
                { name: "김태리", role: "팀원", rank: "초급", contact: "010-9999-6789" }
            ],
        },
        "D-10": {
            process: "갱폼 분진망 설치",
            workDate: "2024-09-09",
            startTime: "08:00",
            endTime: "17:00",
            workers: [
                { name: "조윤희", role: "팀장", rank: "고급", contact: "010-9111-7890" },
                { name: "정은채", role: "팀원", rank: "중급", contact: "010-9222-8901" },
                { name: "김강우", role: "팀원", rank: "초급", contact: "010-9333-9012" },
                { name: "이보영", role: "팀원", rank: "초급", contact: "010-9444-0123" }
            ],
        },
        "E-1": {
        process: "갱폼 입고 및 지상조립",
        workDate: "2024-09-10",
        startTime: "08:00",
        endTime: "17:00",
        workers: [
            { name: "이상민", role: "팀장", rank: "고급", contact: "010-9123-4567" },
            { name: "박미희", role: "팀원", rank: "중급", contact: "010-9234-5678" },
            { name: "정우성", role: "팀원", rank: "초급", contact: "010-9345-6789" },
            { name: "강혜진", role: "팀원", rank: "초급", contact: "010-9456-7890" }
        ],
        },
        "E-2": {
        process: "갱폼 고정 볼트 작업",
        workDate: "2024-09-11",
        startTime: "08:00",
        endTime: "17:00",
        workers: [
            { name: "김지훈", role: "팀장", rank: "고급", contact: "010-9567-8901" },
            { name: "최유리", role: "팀원", rank: "중급", contact: "010-9678-9012" },
            { name: "한민수", role: "팀원", rank: "초급", contact: "010-9789-0123" }
        ],
        },
        "E-3": {
        process: "철근 및 거푸집 설치",
        workDate: "2024-09-12",
        startTime: "08:00",
        endTime: "17:00",
        workers: [
            { name: "박성호", role: "팀장", rank: "고급", contact: "010-9890-1234" },
            { name: "이수진", role: "팀원", rank: "중급", contact: "010-9901-2345" },
            { name: "최영호", role: "팀원", rank: "초급", contact: "010-9012-3456" },
            { name: "김정화", role: "팀원", rank: "초급", contact: "010-9123-4567" },
            { name: "강태원", role: "팀원", rank: "초급", contact: "010-9234-5678" }
        ],
        },
        "E-4": {
        process: "콘크리트 타설",
        workDate: "2024-09-13",
        startTime: "08:00",
        endTime: "17:00",
        workers: [
            { name: "김수연", role: "팀장", rank: "고급", contact: "010-9345-6789" },
            { name: "박철민", role: "팀원", rank: "중급", contact: "010-9456-7890" },
            { name: "정민호", role: "팀원", rank: "초급", contact: "010-9567-8901" },
            { name: "이해인", role: "팀원", rank: "초급", contact: "010-9678-9012" }
        ],
        },
        "E-5": {
        process: "콘크리트 양생",
        workDate: "2024-09-14",
        startTime: "08:00",
        endTime: "17:00",
        workers: [
            { name: "홍석천", role: "팀장", rank: "고급", contact: "010-9789-0123" },
            { name: "김지수", role: "팀원", rank: "중급", contact: "010-9890-1234" },
            { name: "박진희", role: "팀원", rank: "초급", contact: "010-9901-2345" },
            { name: "강다니엘", role: "팀원", rank: "초급", contact: "010-9012-3456" },
            { name: "이지훈", role: "팀원", rank: "초급", contact: "010-9123-4567" }
        ],
        },
        "E-6": {
        process: "인양장비에 갱폼지지",
        workDate: "2024-09-15",
        startTime: "08:00",
        endTime: "17:00",
        workers: [
            { name: "김남길", role: "팀장", rank: "고급", contact: "010-9234-5678" },
            { name: "이현우", role: "팀원", rank: "중급", contact: "010-9345-6789" },
            { name: "박준형", role: "팀원", rank: "초급", contact: "010-9456-7890" }
        ],
        },
        "E-7": {
        process: "갱폼 해체",
        workDate: "2024-09-16",
        startTime: "08:00",
        endTime: "17:00",
        workers: [
            { name: "정해인", role: "팀장", rank: "고급", contact: "010-9567-8901" },
            { name: "김선호", role: "팀원", rank: "중급", contact: "010-9678-9012" },
            { name: "박하늘", role: "팀원", rank: "초급", contact: "010-9789-0123" },
            { name: "강민수", role: "팀원", rank: "초급", contact: "010-9890-1234" }
        ],
        },
        "E-8": {
        process: "갱폼 인양",
        workDate: "2024-09-17",
        startTime: "08:00",
        endTime: "17:00",
        workers: [
            { name: "김태희", role: "팀장", rank: "고급", contact: "010-9901-2345" },
            { name: "이지은", role: "팀원", rank: "중급", contact: "010-9012-3456" },
            { name: "박세진", role: "팀원", rank: "초급", contact: "010-9123-4567" },
            { name: "정진영", role: "팀원", rank: "초급", contact: "010-9234-5678" },
            { name: "강태우", role: "팀원", rank: "초급", contact: "010-9345-6789" }
        ],
        },
        "E-9": {
        process: "갱폼 하부 케이지 설치",
        workDate: "2024-09-18",
        startTime: "08:00",
        endTime: "17:00",
        workers: [
            { name: "김재환", role: "팀장", rank: "고급", contact: "010-9456-7890" },
            { name: "이태원", role: "팀원", rank: "중급", contact: "010-9567-8901" },
            { name: "박보검", role: "팀원", rank: "초급", contact: "010-9678-9012" },
            { name: "차은우", role: "팀원", rank: "초급", contact: "010-9789-0123" },
            { name: "강하늘", role: "팀원", rank: "초급", contact: "010-9890-1234" }
        ],
        },
        "E-10": {
        process: "갱폼 분진망 설치",
        workDate: "2024-09-19",
        startTime: "08:00",
        endTime: "17:00",
        workers: [
            { name: "김준수", role: "팀장", rank: "고급", contact: "010-9901-2345" },
            { name: "최수지", role: "팀원", rank: "중급", contact: "010-9012-3456" },
            { name: "박민지", role: "팀원", rank: "초급", contact: "010-9123-4567" }
        ],
    }
        // D-1 to J-10 would follow the same pattern
    };

    function toggleSubButtons(building) {
        var subButtons = document.getElementById('sub-buttons-' + building);
        var allSubButtons = document.querySelectorAll('.sub-buttons');

        allSubButtons.forEach(function (element) {
            if (element !== subButtons) {
                element.classList.remove('show');
            }
        });

        subButtons.classList.toggle('show');
        selectedBuilding = building + '동'; // Set the selected building
    }

    function updateText(text, button) {
        document.getElementById('selectedGangForm').innerText = text;

        var allSubButtons = document.querySelectorAll('.sub-buttons button');
        allSubButtons.forEach(function (element) {
            element.classList.remove('selected');
        });

        button.classList.add('selected');

        var data = gangFormData[text.split(' ')[1]];

        var processItems = document.querySelectorAll('#process .grid-item');
        processItems.forEach(function(item) {
            item.style.color = item.innerText === data.process ? 'yellow' : 'white';
        });

        document.getElementById('workDate').value = data.workDate;
        document.getElementById('startTime').value = data.startTime;
        document.getElementById('endTime').value = data.endTime;
        updateElapsedTime();

        var workersList = document.getElementById('workers');
        workersList.innerHTML = '';
        data.workers.forEach(worker => {
            var li = document.createElement('li');
            li.textContent = `${worker.name} / ${worker.role} / ${worker.rank} / ${worker.contact}`;
            workersList.appendChild(li);
        });

        document.getElementById('cctv').innerText = `타워크레인CCTV: ${data.cctv}`;
        document.getElementById('cctvUrl').value = data.cctvUrl; // IP 카메라 URL 설정
    }

    function updateElapsedTime() {
        const workDateInput = document.getElementById('workDate').value;
        const startTimeInput = document.getElementById('startTime').value;
        const endTimeInput = document.getElementById('endTime').value;
        const elapsedTimeSpan = document.getElementById('elapsedTime');

        if (workDateInput && startTimeInput) {
            const now = new Date();
            const startTime = new Date(workDateInput + 'T' + startTimeInput);

            // If the start time is in the future, display 00:00
            if (startTime > now) {
                elapsedTimeSpan.textContent = '작업 경과 시간: 00:00';
                return;
            }

            let elapsedTime = new Date(now - startTime);

            // If the end time is set and current time is past end time, use end time for calculation
            if (endTimeInput) {
                const endTime = new Date(workDateInput + 'T' + endTimeInput);
                if (now > endTime) {
                    elapsedTime = new Date(endTime - startTime);
                }
            }

            const hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');

            elapsedTimeSpan.textContent = `작업 경과 시간: ${hours}:${minutes}`;
        } else {
            elapsedTimeSpan.textContent = '작업 경과 시간: 00:00';
        }
    }

    function updateCCTVUrl() {
        const craneNumber = document.getElementById('towerCraneSelect').value;
        const urlInput = document.getElementById('cctvUrl');
        urlInput.value = localStorage.getItem('cctvUrl' + craneNumber) || ''; // 이전에 저장된 URL을 불러옴
    }

    function selectTowerCrane() {
        const craneNumber = document.getElementById('towerCraneSelect').value;
        // 선택된 타워크레인의 URL을 표시하기 위한 코드가 있었으나 showCCTVUrl로 변경됨
    }

    function showCCTVUrl() {
        const craneSelect = document.getElementById('towerCraneSelect');
        const selectedOption = craneSelect.options[craneSelect.selectedIndex].text;
        const craneNumber = craneSelect.value;
        const url = localStorage.getItem('cctvUrl' + craneNumber) || '';
        const newUrl = prompt("Enter new CCTV URL for " + selectedOption + ":", url);
        if (newUrl !== null) {
            localStorage.setItem('cctvUrl' + craneNumber, newUrl);
        }
    }

    function showAddCranePrompt() {
        const newCraneName = prompt("추가할 CCTV의 이름을 입력하세요:");
        if (newCraneName) {
            addTowerCrane(newCraneName);
        }
    }

    function addTowerCrane(name) {
        const select = document.getElementById('towerCraneSelect');
        const newOption = document.createElement("option");
        const newCraneNumber = select.options.length + 1;
        newOption.text = name;
        newOption.value = newCraneNumber;
        select.appendChild(newOption);
        sortCraneOptions(select);
        select.value = newCraneNumber;
    }

    function deleteTowerCrane() {
        const select = document.getElementById('towerCraneSelect');
        const selectedOption = select.options[select.selectedIndex];
        const craneName = selectedOption.text;

        const confirmDeletion = confirm(craneName + "을(를) 삭제하시겠습니까?");
        if (confirmDeletion) {
            if (select.options.length > 1) {
                select.remove(select.selectedIndex);
            } else {
                alert("삭제할 CCTV가 없습니다.");
            }
        }
    }

    function viewCCTV() {
        const craneNumber = document.getElementById('towerCraneSelect').value;
        const url = localStorage.getItem('cctvUrl' + craneNumber);
        if (url) {
            window.open(url, '_blank', 'width=800,height=600');
        } else {
            alert("해당 CCTV의 URL이 설정되지 않았습니다.");
        }
    }

    function sortCraneOptions(select) {
        const options = Array.from(select.options);
        options.sort((a, b) => a.text.localeCompare(b.text, undefined, { numeric: true }));
        select.innerHTML = '';
        options.forEach(option => select.appendChild(option));
    }

    document.getElementById('workDate').addEventListener('input', updateElapsedTime);
    document.getElementById('startTime').addEventListener('input', updateElapsedTime);
    document.getElementById('endTime').addEventListener('input', updateElapsedTime);

    setInterval(updateElapsedTime, 60000);

    function editSiteName() {
        var siteNameElement = document.getElementById('siteName');
        var currentName = siteNameElement.innerText;
        var input = document.createElement('input');
        input.type = 'text';
        input.value = currentName;
        input.className = 'siteNameInput';

        input.addEventListener('blur', function() {
            siteNameElement.innerText = input.value;
            siteNameElement.style.display = 'block';
            input.remove();
        });

        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                siteNameElement.innerText = input.value;
                siteNameElement.style.display = 'block';
                input.remove();
            }
        });

        siteNameElement.style.display = 'none';
        siteNameElement.parentNode.appendChild(input);
        input.focus();
    }

    function openInspectionDetails() {
        var fileName = 'inspection.html'; // Fixed file name
        window.open(fileName, '_blank', 'width=800,height=600');
    }
    

    function openProgressPage(building) {
        if (building) {
            selectedBuilding = building + '동';
        }
        if (!selectedBuilding) {
            var selectedGangForm = document.getElementById('selectedGangForm').innerText;
            selectedBuilding = selectedGangForm.split(' ')[0]; // Extract the building part from the selected text
        }
        var fileName = 'progress_' + selectedBuilding.split('동')[0] + '.html'; // Construct the file name
        window.open(fileName, '_blank', 'width=800,height=600');
    }

    function openNotificationPage() {
        const selectedGangForm = document.getElementById('selectedGangForm').innerText;
        const data = JSON.stringify(gangFormData);
        const url = `notification.html?selectedGangForm=${encodeURIComponent(selectedGangForm)}&gangFormData=${encodeURIComponent(data)}`;
        window.open(url, '_blank', 'width=800,height=600');
    }
    
    function checkSelectionAndOpenPage(type) {
    if (type === 'progress') {
        if (!selectedBuilding) {
            alert('구역을 먼저 선택해주세요.');
            return;
        }
        openProgressPage(selectedBuilding);
    } else if (type === 'inspection') {
        openInspectionDetails();
    }

    function openEventPage() {
        // selectedGangForm 기본값을 'A-1'로 설정
        const selectedGangForm = 'A-1';
        const data = JSON.stringify(gangFormData);
        const url = `event.html?selectedGangForm=${encodeURIComponent(selectedGangForm)}&gangFormData=${encodeURIComponent(data)}`;
        window.open(url, '_blank', 'width=800,height=600');
    }
    
    // 기존 함수와 함께 아래와 같이 호출하는 부분을 추가
    document.querySelector('.이벤트-box').addEventListener('click', openEventPage);
    
}

    
