const curriculumData = [
    {
        "title": "1. Lý thuyết cơ bản",
        "type": "folder",
        "children": [
            {
                "title": "Bài 1 - Song song",
                "file": "models/Bài 1 - Song song.glb", 
                "desc": "Cho hình chóp S.ABCD đáy là hình vuông cạnh a...\nTính thể tích khối chóp.\n=====\nTa có diện tích đáy là a^2...\nChiều cao h = ...\nVậy V = ..."
            },
            {
                "title": "Bài 2 - Vuông góc",
                "file": "models/Bài 2 - Vuông góc.glb",
                "desc": ""
            },
            {
                "title": "Bài 3 - Test",
                "file": "models/Bài 3 - Test.glb",
                "desc": ""
            }
        ]
    },
    {
        "title": "2. Bài tập lớp 11",
        "type": "folder",
        "children": [
            {
                "title": "Bài 4.01",
                "file": "models/Bài 4.01.glb",
                "desc": "Cho hình chóp S.ABCD đáy là hình vuông cạnh a..."
            },
            // ... (Nếu bạn cũng để các bài tập chương 2 thẳng trong models thì sửa tương tự, tạm thời mình giữ nguyên logic cho chương 3 bên dưới là quan trọng nhất)
             {
                "title": "Bài 4.02",
                "file": "models/Bài 4.02.glb",
                "desc": "..."
            }
            // (Lưu ý: Nếu toàn bộ file chương 2 bạn cũng vứt hết vào folder models thì hãy báo mình sửa nốt đoạn này, dưới đây là phần sửa cho Chương 3 khớp với ảnh bạn gửi)
        ]
    },
    {
        "title": "3. Bài tập lớp 11 học kỳ II",
        "type": "folder",
        "children": [
            {
                "title": "Bài 7.01",
                "file": "models/Bài 7.01.glb", 
                "desc": ""
            },
            {
                "title": "Bài 7.02",
                "file": "models/Bài 7.02.glb",
                "desc": "Bài 7.2 (SGK Hình Học 11)\nĐề bài:\nCho hình hộp ABCD.A'B'C'D' có tất cả các cạnh bằng nhau và góc A'AD = 120°.\nTính góc giữa các cặp đường thẳng sau:\na) A'C' và BD\nb) AD và BB'\nc) A'D và BB'\n=====\nLời giải chi tiết:\n\na) Tính góc giữa A'C' và BD:\n- Vì ABCD.A'B'C'D' là hình hộp nên mặt đáy ABCD và A'B'C'D' song song và bằng nhau.\n=> A'C' // AC.\n- Do đó: Góc(A'C', BD) = Góc(AC, BD).\n- Đáy ABCD là hình thoi (do hình hộp có tất cả các cạnh bằng nhau).\n=> Hai đường chéo hình thoi vuông góc với nhau: AC ⊥ BD.\n=> Góc(AC, BD) = 90°.\nVậy góc giữa A'C' và BD là 90°.\n\nb) Tính góc giữa AD và BB':\n- Vì hình hộp nên BB' // AA'.\n- Do đó: Góc(AD, BB') = Góc(AD, AA') = Góc(A'AD). (Hoặc góc bù của nó).\n- Theo giả thiết: Góc A'AD = 120°.\n- Quy ước góc giữa hai đường thẳng luôn ≤ 90°.\n=> Góc(AD, BB') = 180° - 120° = 60°.\n\nc) Tính góc giữa A'D và BB':\n- Vì BB' // AA' nên Góc(A'D, BB') = Góc(A'D, AA') = Góc(DA'A).\n- Xét tam giác AA'D:\n  + AA' = AD (do tất cả các cạnh hình hộp bằng nhau).\n  => Tam giác AA'D cân tại A.\n  + Góc ở đỉnh A'AD = 120°.\n- Tổng 3 góc trong tam giác là 180°.\n=> Góc DA'A = (180° - 120°) / 2 = 30°.\nVậy góc giữa A'D và BB' là 30°."
            },
            {
                "title": "Bài 7.03",
                "file": "models/Bài 7.03.glb",
                "desc": "7.3..."
            },
            {
                "title": "Bài 7.04",
                "file": "models/Bài 7.04.glb",
                "desc": "Bài 7.4 (SGK Hình Học 11)..."
            },
            {
                "title": "Bài 7.05",
                "file": "models/Bài 7.05.glb",
                "desc": "7.5..."
            },
            {
                "title": "Bài 7.06",
                "file": "models/Bài 7.06.glb",
                "desc": "Bài 7.6..."
            },
            {
                "title": "Bài 7.07",
                "file": "models/Bài 7.07.glb",
                "desc": "Bài 7.7..."
            },
            {
                "title": "Bài 7.08",
                "file": "models/Bài 7.08.glb",
                "desc": "Bài 7.8..."
            },
            {
                "title": "Bài 7.09",
                "file": "models/Bài 7.09.glb",
                "desc": "Bài 7.9..."
            },
            {
                "title": "Bài 7.10",
                "file": "models/Bài 7.10.glb",
                "desc": "Bài 7.10..."
            },
            {
                "title": "Bài 7.11",
                "file": "models/Bài 7.11.glb",
                "desc": "Bài 7.11..."
            },
            {
                "title": "Bài 7.12",
                "file": "models/Bài 7.12.glb",
                "desc": "Bài 7.12..."
            },
            {
                "title": "Bài 7.13",
                "file": "models/Bài 7.13.glb",
                "desc": "Bài 7.13..."
            },
            {
                "title": "Bài 7.14",
                "file": "models/Bài 7.14.glb",
                "desc": "Bài 7.14..."
            },
            {
                "title": "Bài 7.15",
                "file": "models/Bài 7.15.glb",
                "desc": "Bài 7.15..."
            },
            {
                "title": "Bài 7.16",
                "file": "models/Bài 7.16.glb",
                "desc": "Bài 7.16..."
            },
            {
                "title": "Bài 7.17",
                "file": "models/Bài 7.17.glb",
                "desc": "Bài 7.17..."
            },
            {
                "title": "Bài 7.18",
                "file": "models/Bài 7.18.glb",
                "desc": "Bài 7.18..."
            },
            {
                "title": "Bài 7.19",
                "file": "models/Bài 7.19.glb",
                "desc": "Bài 7.19..."
            },
            {
                "title": "Bài 7.20",
                "file": "models/Bài 7.20.glb",
                "desc": "Bài 7.20..."
            },
            {
                "title": "Bài 7.21",
                "file": "models/Bài 7.21.glb",
                "desc": "Bài 7.21..."
            },
            {
                "title": "Bài 7.22",
                "file": "models/Bài 7.22.glb",
                "desc": "Bài 7.22..."
            },
            {
                "title": "Bài 7.23",
                "file": "models/Bài 7.23.glb",
                "desc": "Bài 7.23..."
            },
            {
                "title": "Bài 7.24",
                "file": "models/Bài 7.24.glb",
                "desc": "Bài 7.24..."
            },
            {
                "title": "Bài 7.25",
                "file": "models/Bài 7.25.glb",
                "desc": "Bài 7.25..."
            },
            {
                "title": "Bài 7.26",
                "file": "models/Bài 7.26.glb",
                "desc": "Bài 7.26..."
            },
            {
                "title": "Bài 7.27",
                "file": "models/Bài 7.27.glb",
                "desc": "Bài 7.27..."
            },
            {
                "title": "Bài 7.28",
                "file": "models/Bài 7.28.glb",
                "desc": "Bài 7.28..."
            },
            {
                "title": "Bài 7.29",
                "file": "models/Bài 7.29.glb",
                "desc": "Bài 7.29..."
            },
            {
                "title": "Bài 7.30",
                "file": "models/Bài 7.30.glb",
                "desc": "Bài 7.30..."
            },
            {
                "title": "Bài 7.31",
                "file": "models/Bài 7.31.glb",
                "desc": "Bài 7.31..."
            },
            {
                "title": "Bài 7.33",
                "file": "models/Bài 7.33.glb",
                "desc": "Bài 7.33..."
            },
            {
                "title": "Bài 7.35",
                "file": "models/Bài 7.35.glb",
                "desc": "Bài 7.35..."
            },
            {
                "title": "Bài 7.36",
                "file": "models/Bài 7.36.glb",
                "desc": "Bài 7.36..."
            },
            {
                "title": "Bài 7.37",
                "file": "models/Bài 7.37.glb",
                "desc": "Bài 7.37..."
            },
            {
                "title": "Bài 7.38",
                "file": "models/Bài 7.38.glb",
                "desc": "Bài 7.38..."
            },
            {
                "title": "Bài 7.39",
                "file": "models/Bài 7.39.glb",
                "desc": "Bài 7.39..."
            },
            {
                "title": "Bài 7.40",
                "file": "models/Bài 7.40.glb",
                "desc": "Bài 7.40..."
            },
            {
                "title": "Bài 7.51",
                "file": "models/Bài 7.51.glb",
                "desc": "Bài 7.51..."
            },
            {
                "title": "Bài 7.52",
                "file": "models/Bài 7.52.glb",
                "desc": "Bài 7.52..."
            },
            {
                "title": "Bài 7.53",
                "file": "models/Bài 7.53.glb",
                "desc": "Bài 7.53..."
            },
            {
                "title": "Bài 7.55",
                "file": "models/Bài 7.55.glb",
                "desc": "Bài 7.55..."
            },
            {
                "title": "Bài 7.56",
                "file": "models/Bài 7.56.glb",
                "desc": "Bài 7.56..."
            }
        ]
    }
];
