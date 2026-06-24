const QUESTION_BANK = [
  {
    category: "预警信号",
    question: "在教室里突然感觉桌椅明显摇晃，第一反应应该是什么？",
    options: ["马上跑出教室", "就近躲到课桌下并护住头颈", "站到窗边观察"],
    answer: 1,
    explain: "强烈摇晃时先就近避险，躲到结实课桌下，保护头颈。"
  },
  {
    category: "预警信号",
    question: "地震时听到校园广播发出撤离指令，应该怎么做？",
    options: ["听老师指挥有序撤离", "自己先冲出队伍", "回座位拿书包"],
    answer: 0,
    explain: "撤离时要听老师和广播指挥，不抢跑、不返回拿物品。"
  },
  {
    category: "预警信号",
    question: "地震发生时，看到吊灯剧烈晃动说明什么？",
    options: ["可能正在发生地震", "可以继续上课", "只需要关灯"],
    answer: 0,
    explain: "吊灯、柜子、玻璃明显晃动是危险信号，要立即避险。"
  },
  {
    category: "预警信号",
    question: "地震预警响起后，下面哪种行为最安全？",
    options: ["立刻靠近窗户", "马上躲避并保护头颈", "站在门口大喊"],
    answer: 1,
    explain: "预警后要争取短时间避险，护住头颈，远离易碎易倒物。"
  },
  {
    category: "预警信号",
    question: "地震时地面突然晃动，同学们应该保持怎样的状态？",
    options: ["冷静听指挥", "互相推挤", "跑去围观"],
    answer: 0,
    explain: "冷静能减少踩踏和碰撞风险，听指挥才能有序避险。"
  },
  {
    category: "室内避险",
    question: "室内避震最重要的三个动作是？",
    options: ["趴下、掩护、抓牢", "奔跑、跳跃、喊叫", "开门、拍照、等待"],
    answer: 0,
    explain: "趴下、掩护、抓牢是常用避震动作。"
  },
  {
    category: "室内避险",
    question: "在家中遇到地震，下面哪个位置更适合临时避险？",
    options: ["结实桌子下", "玻璃窗旁边", "高柜前面"],
    answer: 0,
    explain: "结实桌子能提供掩护，玻璃和高柜容易造成伤害。"
  },
  {
    category: "室内避险",
    question: "躲在桌子下时，为什么要抓牢桌腿？",
    options: ["防止桌子移动失去掩护", "方便睡觉", "让桌子更漂亮"],
    answer: 0,
    explain: "摇晃时桌子可能移动，抓牢桌腿能保持掩护。"
  },
  {
    category: "室内避险",
    question: "地震时为什么要远离窗户？",
    options: ["玻璃可能破碎飞溅", "窗户会变暗", "窗外声音太大"],
    answer: 0,
    explain: "玻璃破碎会割伤人，所以要远离窗户和玻璃门。"
  },
  {
    category: "室内避险",
    question: "在室内摇晃还没停止时，最不应该做什么？",
    options: ["冲向楼梯或电梯", "护住头颈", "躲到结实家具旁"],
    answer: 0,
    explain: "摇晃时奔跑容易摔倒或被掉落物砸伤，应先就地避险。"
  },
  {
    category: "室内避险",
    question: "如果身边没有课桌，下面哪种做法更安全？",
    options: ["靠近承重墙角蹲下护头", "站到书柜旁", "跑到阳台边"],
    answer: 0,
    explain: "没有桌子时可选择相对安全区域蹲下护头，远离高柜和阳台。"
  },
  {
    category: "室内避险",
    question: "地震时在床上休息，来不及下床时可以怎么做？",
    options: ["用枕头保护头部并远离窗边", "跳窗逃生", "把灯打开"],
    answer: 0,
    explain: "来不及时先保护头部，避免玻璃和坠落物伤害。"
  },
  {
    category: "学校逃生",
    question: "学校里地震发生时，学生应该优先听谁的指挥？",
    options: ["老师和广播", "同桌随便喊的口令", "自己临时决定"],
    answer: 0,
    explain: "校园撤离要统一听老师和广播指挥，避免混乱。"
  },
  {
    category: "学校逃生",
    question: "撤离教学楼时应该选择什么方式？",
    options: ["走楼梯有序撤离", "乘电梯更快", "从栏杆翻下去"],
    answer: 0,
    explain: "地震后电梯可能停运或故障，应走楼梯撤离。"
  },
  {
    category: "学校逃生",
    question: "排队撤离时，下面哪种行为是错误的？",
    options: ["推挤前面的同学", "护住头部", "跟紧队伍"],
    answer: 0,
    explain: "推挤容易造成踩踏，撤离时要有序慢行。"
  },
  {
    category: "学校逃生",
    question: "地震撤离时发现书包还在教室，应该怎么做？",
    options: ["不返回拿书包", "马上跑回去拿", "让同学帮忙拿"],
    answer: 0,
    explain: "撤离时生命安全最重要，不要返回危险区域拿物品。"
  },
  {
    category: "学校逃生",
    question: "到达操场或空旷地后，应该怎么做？",
    options: ["按班级集合等待点名", "马上离队回家", "跑回教室看情况"],
    answer: 0,
    explain: "集合点名能确认人员安全，也便于老师统一安排。"
  },
  {
    category: "学校逃生",
    question: "在楼道撤离时，为什么要靠右慢行？",
    options: ["减少碰撞和拥堵", "为了看风景", "为了走得更慢"],
    answer: 0,
    explain: "靠右有序能降低拥堵、摔倒和踩踏风险。"
  },
  {
    category: "户外避险",
    question: "户外遇到地震时，最应该远离哪里？",
    options: ["高楼、围墙、电线杆", "开阔操场", "空旷广场"],
    answer: 0,
    explain: "高楼、围墙和电线杆可能倒塌或掉落物品。"
  },
  {
    category: "户外避险",
    question: "在操场上遇到地震，比较安全的做法是？",
    options: ["留在空旷处蹲下护头", "跑到楼房下面", "站到广告牌旁"],
    answer: 0,
    explain: "空旷处掉落物少，蹲下护头能降低受伤风险。"
  },
  {
    category: "户外避险",
    question: "路过围墙时发生地震，应该怎么做？",
    options: ["迅速离开围墙附近", "靠墙站稳", "扶住墙观察"],
    answer: 0,
    explain: "围墙可能倒塌，应迅速离开。"
  },
  {
    category: "户外避险",
    question: "地震时在山坡附近，为什么要尽快远离？",
    options: ["可能发生滑坡或落石", "山坡会变热", "山坡没有声音"],
    answer: 0,
    explain: "地震可能引发滑坡、落石等次生灾害。"
  },
  {
    category: "户外避险",
    question: "地震时看到电线杆和电线晃动，应该怎么做？",
    options: ["远离电线杆和垂落电线", "靠近拍照", "用手扶住电线杆"],
    answer: 0,
    explain: "电线杆可能倒塌，垂落电线可能带电，非常危险。"
  },
  {
    category: "户外避险",
    question: "在商场外遇到地震，下面哪种地点更安全？",
    options: ["远离建筑的空旷区域", "玻璃幕墙下面", "广告牌正下方"],
    answer: 0,
    explain: "玻璃幕墙和广告牌可能掉落，空旷处更安全。"
  },
  {
    category: "震后安全",
    question: "第一次摇晃停止后，可以马上回教室吗？",
    options: ["不可以，要等确认安全", "可以立刻回去", "可以单独回去拿东西"],
    answer: 0,
    explain: "地震后可能有余震，必须等待老师和官方确认安全。"
  },
  {
    category: "震后安全",
    question: "地震后为什么不能乘坐电梯？",
    options: ["电梯可能故障或停电", "电梯太干净", "电梯会变慢"],
    answer: 0,
    explain: "地震后电梯存在停运、卡住等风险，应走楼梯。"
  },
  {
    category: "震后安全",
    question: "地震后发现有人受伤，学生应该怎么做？",
    options: ["告诉老师或拨打求助电话", "围在旁边看热闹", "随意搬动伤者"],
    answer: 0,
    explain: "应及时报告老师或求助，避免随意搬动伤者造成二次伤害。"
  },
  {
    category: "震后安全",
    question: "地震后闻到燃气味，应该怎么做？",
    options: ["远离并告诉大人，不点火", "打开打火机看看", "继续待在原地"],
    answer: 0,
    explain: "燃气泄漏很危险，不能点火或开关电器，应远离并报告大人。"
  },
  {
    category: "震后安全",
    question: "震后等待救援时，下面哪种做法更合适？",
    options: ["保存体力并发出求救信号", "不停大喊直到没力气", "乱跑寻找出口"],
    answer: 0,
    explain: "如果被困，应保存体力，敲击或呼喊发出求救信号。"
  },
  {
    category: "震后安全",
    question: "地震后看到建筑出现裂缝，应该怎么做？",
    options: ["远离并报告老师或大人", "靠近摸一摸", "在墙边休息"],
    answer: 0,
    explain: "有裂缝的建筑可能不稳定，应远离危险区域。"
  },
  {
    category: "错误行为辨析",
    question: "下面哪种行为属于地震时的危险行为？",
    options: ["站在窗边看外面", "蹲下护头", "听老师指挥"],
    answer: 0,
    explain: "窗边可能有玻璃碎片和坠落物，不能靠近。"
  },
  {
    category: "错误行为辨析",
    question: "地震发生时，为什么不能拥挤冲出教室？",
    options: ["容易摔倒和踩踏", "会耽误拍照", "会弄乱课桌"],
    answer: 0,
    explain: "拥挤冲跑容易造成摔倒、碰撞和踩踏。"
  },
  {
    category: "错误行为辨析",
    question: "地震时同学想从二楼跳下去逃生，你应该知道这很危险，因为？",
    options: ["可能造成严重摔伤", "跳下去会更快集合", "老师会表扬"],
    answer: 0,
    explain: "跳楼极易造成严重伤害，应按安全路线撤离。"
  },
  {
    category: "错误行为辨析",
    question: "地震时躲在高大书柜旁边安全吗？",
    options: ["不安全，书柜可能倒下", "很安全，因为书多", "只要扶住就安全"],
    answer: 0,
    explain: "高柜和重物可能倒塌，应远离。"
  },
  {
    category: "错误行为辨析",
    question: "撤离时看到同学摔倒，正确做法是？",
    options: ["提醒老师并帮助保持队伍秩序", "从他身上跨过去", "催他快点跑"],
    answer: 0,
    explain: "应及时提醒老师，避免拥挤踩踏。"
  },
  {
    category: "错误行为辨析",
    question: "地震后为了寻找家人，学生可以独自离开集合点吗？",
    options: ["不可以，要听老师安排", "可以马上离开", "可以翻墙出去"],
    answer: 0,
    explain: "独自离开会增加危险，也会影响老师确认安全。"
  },
  {
    category: "应急准备",
    question: "平时学校组织地震演练，学生应该怎么做？",
    options: ["认真参加，记住路线", "故意捣乱", "躲起来不参加"],
    answer: 0,
    explain: "演练能帮助大家熟悉避险动作和撤离路线。"
  },
  {
    category: "应急准备",
    question: "家庭防震准备中，下面哪项比较重要？",
    options: ["固定高柜和重物", "把重物放在床头", "堵住安全出口"],
    answer: 0,
    explain: "固定高柜和重物能减少地震时倒塌伤人。"
  },
  {
    category: "应急准备",
    question: "应急包里可以准备什么？",
    options: ["饮用水、手电、简单药品", "易碎玻璃杯", "很多玩具但没有水"],
    answer: 0,
    explain: "应急包应准备水、手电、药品等实用物品。"
  },
  {
    category: "应急准备",
    question: "为什么要提前认识学校疏散路线？",
    options: ["紧急时能更快有序撤离", "为了比赛跑得快", "为了找捷径玩"],
    answer: 0,
    explain: "熟悉路线能减少慌乱，提高撤离效率。"
  },
  {
    category: "应急准备",
    question: "地震安全口诀中，下面哪句更正确？",
    options: ["先避险、护头颈、听指挥、有序撤离", "先拍照、再围观、最后撤离", "先乘电梯、再回教室"],
    answer: 0,
    explain: "这句口诀概括了地震避险的核心动作。"
  },
  {
    category: "应急准备",
    question: "如果家人不在身边，平时应该记住什么？",
    options: ["家长电话和紧急求助方式", "游戏账号密码", "零食放在哪里"],
    answer: 0,
    explain: "记住家长电话和求助方式，能在紧急时联系可靠大人。"
  },
  {
    category: "预警信号",
    question: "手机收到地震预警提示时，下面哪种反应更合适？",
    options: ["马上寻找安全掩护", "继续玩手机", "把提示关掉不管"],
    answer: 0,
    explain: "地震预警提示争取的是短暂避险时间，应立刻寻找安全掩护。"
  },
  {
    category: "预警信号",
    question: "门窗突然发出明显晃动声，物品开始掉落，说明应该？",
    options: ["立即进入避险动作", "站起来寻找声音来源", "跑去关窗"],
    answer: 0,
    explain: "明显晃动和物品掉落是危险信号，要先保护自己。"
  },
  {
    category: "预警信号",
    question: "书本和文具从桌上滑落时，最应该警惕什么？",
    options: ["可能发生地震", "桌子没有摆整齐", "文具太轻"],
    answer: 0,
    explain: "物品异常晃动或掉落可能提示地震，需要马上避险。"
  },
  {
    category: "预警信号",
    question: "看到墙面出现裂缝并伴随摇晃时，应该怎么做？",
    options: ["远离墙面并听从撤离指令", "靠近观察裂缝", "用手按住裂缝"],
    answer: 0,
    explain: "裂缝和摇晃可能代表结构危险，应远离并听指挥。"
  },
  {
    category: "预警信号",
    question: "地震时同学站不稳，正确提醒是？",
    options: ["蹲下护头，寻找掩护", "快跑到窗边", "跳起来保持平衡"],
    answer: 0,
    explain: "摇晃强烈时应降低重心并保护头颈。"
  },
  {
    category: "室内避险",
    question: "在厨房遇到地震，下面哪种做法更安全？",
    options: ["远离炉具和橱柜，保护头部", "去拿锅碗", "打开燃气灶查看"],
    answer: 0,
    explain: "厨房有炉具、刀具和橱柜，地震时要远离危险物。"
  },
  {
    category: "室内避险",
    question: "在卫生间遇到地震，来不及离开时可以怎么做？",
    options: ["蹲下护头，远离镜子和玻璃", "站到镜子前", "打开热水器"],
    answer: 0,
    explain: "卫生间镜子和玻璃可能破碎，应远离并保护头部。"
  },
  {
    category: "室内避险",
    question: "客厅里电视柜很高，地震时应该？",
    options: ["远离电视柜和悬挂物", "站到电视柜旁边", "扶住电视机"],
    answer: 0,
    explain: "高柜和悬挂物可能倒落，必须远离。"
  },
  {
    category: "室内避险",
    question: "坐在教室窗边时发生地震，第一步应怎么做？",
    options: ["离开窗边并躲到课桌下", "打开窗户看外面", "靠着玻璃蹲下"],
    answer: 0,
    explain: "窗边玻璃容易破碎，应离开窗边并寻找掩护。"
  },
  {
    category: "室内避险",
    question: "在实验室遇到地震，应该特别注意什么？",
    options: ["远离药品柜和玻璃器皿", "拿起实验器材", "继续完成实验"],
    answer: 0,
    explain: "实验室有玻璃和药品，地震时要远离危险物并听老师指挥。"
  },
  {
    category: "室内避险",
    question: "在图书馆遇到地震，下面哪项最危险？",
    options: ["站在高书架旁边", "躲到结实桌下", "护住头颈"],
    answer: 0,
    explain: "高书架可能倒塌，不能站在旁边。"
  },
  {
    category: "室内避险",
    question: "在食堂遇到地震，应该远离什么？",
    options: ["热汤热水和高处餐具", "空旷过道", "老师指定区域"],
    answer: 0,
    explain: "热汤热水和高处餐具可能造成烫伤或砸伤。"
  },
  {
    category: "室内避险",
    question: "在宿舍上铺遇到强烈摇晃，较安全的做法是？",
    options: ["抓稳护头，等摇晃减弱后再下床", "立刻跳下床", "站在床边摇晃"],
    answer: 0,
    explain: "强烈摇晃时跳下床容易摔伤，应先抓稳并保护头部。"
  },
  {
    category: "室内避险",
    question: "在走廊里遇到地震摇晃，应该怎么做？",
    options: ["靠近内墙蹲下护头，远离玻璃", "冲向楼梯", "站在窗边"],
    answer: 0,
    explain: "走廊摇晃时先避开玻璃和坠落物，保护头颈。"
  },
  {
    category: "学校逃生",
    question: "课间在楼道里发生地震，应该优先做什么？",
    options: ["听老师指挥，就近护头避险", "跑回座位拿书包", "大声推挤别人"],
    answer: 0,
    explain: "课间也要听老师指挥，就近避险，不制造拥挤。"
  },
  {
    category: "学校逃生",
    question: "在体育馆遇到地震，应该远离哪里？",
    options: ["悬挂灯具和高处设备", "空旷场地中间", "老师集合点"],
    answer: 0,
    explain: "体育馆顶部设备可能掉落，应远离下方区域。"
  },
  {
    category: "学校逃生",
    question: "撤离到操场后，为什么要按班级集合？",
    options: ["方便清点人数确认安全", "方便聊天", "方便抢先离校"],
    answer: 0,
    explain: "按班级集合能帮助老师确认每位同学是否安全。"
  },
  {
    category: "学校逃生",
    question: "走楼梯撤离时，扶手的正确用法是？",
    options: ["轻扶扶手保持稳定", "坐在扶手上滑下去", "拉扯同学"],
    answer: 0,
    explain: "轻扶扶手能保持平衡，不能嬉闹或推拉。"
  },
  {
    category: "学校逃生",
    question: "撤离时看到低年级同学害怕哭泣，应该怎么做？",
    options: ["提醒老师并保持队伍秩序", "嘲笑他", "把他拉着乱跑"],
    answer: 0,
    explain: "要提醒老师处理，同时保持队伍有序。"
  },
  {
    category: "学校逃生",
    question: "广播通知去指定集合点，学生应该？",
    options: ["按路线到指定集合点", "去自己喜欢的地方", "躲到厕所里"],
    answer: 0,
    explain: "集合点是学校预先规划的安全区域，应按路线前往。"
  },
  {
    category: "学校逃生",
    question: "雨天地震撤离时，下面哪种做法更安全？",
    options: ["注意地面湿滑，慢行不推挤", "快速奔跑抢前面", "边跑边打闹"],
    answer: 0,
    explain: "雨天地面湿滑，更要慢行有序，避免摔倒。"
  },
  {
    category: "学校逃生",
    question: "放学路队中遇到地震，应该怎么做？",
    options: ["听带队老师指挥，远离建筑和围墙", "自己跑回教室", "冲到马路中间"],
    answer: 0,
    explain: "放学路队也要听带队老师指挥，避开建筑和围墙。"
  },
  {
    category: "户外避险",
    question: "在桥上或桥边遇到地震，应该注意什么？",
    options: ["尽快远离桥梁结构", "停在桥下避雨", "靠着桥墩休息"],
    answer: 0,
    explain: "桥梁在地震中可能受损，桥下也可能有坠落风险。"
  },
  {
    category: "户外避险",
    question: "公交站牌旁发生地震，应该怎么做？",
    options: ["远离站牌和广告牌", "躲到站牌下面", "扶住广告牌"],
    answer: 0,
    explain: "站牌和广告牌可能倒塌或掉落。"
  },
  {
    category: "户外避险",
    question: "在大树旁遇到强震，下面哪种判断更稳妥？",
    options: ["远离可能折断的树枝", "站在树下最安全", "爬到树上"],
    answer: 0,
    explain: "强震时树枝可能折断，大树附近也要注意风险。"
  },
  {
    category: "户外避险",
    question: "在河边遇到地震时，应该怎么做？",
    options: ["远离河岸和堤坝", "靠近水边观察", "下水躲避"],
    answer: 0,
    explain: "河岸和堤坝可能塌陷，应离开水边。"
  },
  {
    category: "户外避险",
    question: "高压线附近发生地震，最安全的做法是？",
    options: ["远离电线和电杆", "站到电线正下方", "用手拉开电线"],
    answer: 0,
    explain: "高压线可能断落，必须远离，不能触碰。"
  },
  {
    category: "户外避险",
    question: "在街道上遇到地震，应该避开哪里？",
    options: ["玻璃幕墙和临街招牌", "空旷路面", "开阔广场"],
    answer: 0,
    explain: "玻璃幕墙和招牌可能掉落，街道上要远离。"
  },
  {
    category: "户外避险",
    question: "在停车场遇到地震，较安全的做法是？",
    options: ["远离车辆和高大设施，蹲下护头", "钻到车底", "站在出入口中间"],
    answer: 0,
    explain: "车辆可能移动，设施可能掉落，应到开阔处护头。"
  },
  {
    category: "户外避险",
    question: "在山路上遇到地震，应该警惕什么？",
    options: ["落石、滑坡和塌方", "路边花草", "太阳光"],
    answer: 0,
    explain: "山路地震后容易出现落石和滑坡。"
  },
  {
    category: "户外避险",
    question: "在海边遇到强震后，应该想到什么风险？",
    options: ["可能有海啸风险，应远离海岸", "可以继续玩水", "去捡贝壳"],
    answer: 0,
    explain: "海边强震后可能引发海啸，应向高处或内陆撤离。"
  },
  {
    category: "震后安全",
    question: "地震后发现插座冒火花，学生应该怎么做？",
    options: ["远离并告诉大人或老师", "用手去拔插头", "倒水灭火"],
    answer: 0,
    explain: "电器故障有触电风险，学生应远离并报告大人。"
  },
  {
    category: "震后安全",
    question: "地震后地上有碎玻璃，应该怎么做？",
    options: ["避开碎玻璃，穿鞋行动", "光脚跑过去", "用手捡起来玩"],
    answer: 0,
    explain: "碎玻璃容易割伤，震后要保护脚部。"
  },
  {
    category: "震后安全",
    question: "余震来临时，已经在空旷地的同学应该？",
    options: ["蹲下护头，远离危险物", "跑回教学楼", "聚到墙边"],
    answer: 0,
    explain: "空旷地也要护头，并继续远离建筑和高物。"
  },
  {
    category: "震后安全",
    question: "震后饮用水和食物应注意什么？",
    options: ["听从老师和大人安排，不随便吃喝不明食物", "随便喝地上的水", "吃掉捡到的食物"],
    answer: 0,
    explain: "震后环境可能污染，饮食要听从可靠大人安排。"
  },
  {
    category: "震后安全",
    question: "地震后联系家人时，下面哪种做法更好？",
    options: ["用约定方式报平安，听老师安排", "一直占用电话聊天", "自己离队找家人"],
    answer: 0,
    explain: "应按学校和家庭约定报平安，不能擅自离队。"
  },
  {
    category: "震后安全",
    question: "震后听到未经证实的消息，应该怎么做？",
    options: ["不传播谣言，听官方和老师通知", "马上转发给所有人", "编得更吓人"],
    answer: 0,
    explain: "谣言会制造恐慌，应听官方、学校和老师通知。"
  },
  {
    category: "震后安全",
    question: "撤离后为什么不能堵住救援通道？",
    options: ["会影响救援车辆和人员通行", "因为那里不好玩", "因为太阳太晒"],
    answer: 0,
    explain: "救援通道必须保持畅通，方便救援。"
  },
  {
    category: "震后安全",
    question: "如果被困在狭小空间，身体姿势应尽量怎样？",
    options: ["保护头胸，减少体力消耗", "不停乱撞", "大幅度挥舞手脚"],
    answer: 0,
    explain: "被困时要保护重要部位并保存体力。"
  },
  {
    category: "震后安全",
    question: "被困后发现外面有人搜救，较好的求救方式是？",
    options: ["有节奏敲击物体或呼救", "乱扔尖锐物", "保持完全安静"],
    answer: 0,
    explain: "有节奏敲击能帮助搜救人员定位。"
  },
  {
    category: "应急准备",
    question: "家庭可以提前约定什么以便震后联系？",
    options: ["安全集合地点和联系方式", "谁玩游戏更久", "周末吃什么"],
    answer: 0,
    explain: "提前约定集合点和联系方式，震后更容易互相确认安全。"
  },
  {
    category: "应急准备",
    question: "平时看到学校安全出口标志，应该？",
    options: ["记住位置和疏散方向", "把标志遮住", "当作装饰不管"],
    answer: 0,
    explain: "熟悉安全出口能在紧急时快速找到撤离路线。"
  },
  {
    category: "应急准备",
    question: "学生应急联系卡上适合写什么？",
    options: ["姓名、家长电话和重要过敏信息", "银行卡密码", "同学秘密"],
    answer: 0,
    explain: "应急联系卡要写帮助救援和联系家人的信息。"
  },
  {
    category: "应急准备",
    question: "为什么床边可以准备一双结实的鞋？",
    options: ["震后避免踩到碎玻璃", "为了睡觉更舒服", "为了装饰房间"],
    answer: 0,
    explain: "震后地面可能有碎片，穿鞋能保护脚。"
  },
  {
    category: "应急准备",
    question: "家里高柜和书架最好怎样处理？",
    options: ["固定在墙上并重物放低处", "越高越好", "放在床头正上方"],
    answer: 0,
    explain: "固定家具、重物放低处能减少倒落风险。"
  },
  {
    category: "应急准备",
    question: "参加地震演练时，为什么不能嬉笑打闹？",
    options: ["演练是熟悉真实避险流程", "因为演练没有用", "因为老师看不见"],
    answer: 0,
    explain: "认真演练能让紧急情况中的动作更熟练。"
  },
  {
    category: "应急准备",
    question: "应急包中口哨有什么作用？",
    options: ["被困时发出求救信号", "上课吹着玩", "代替水和食物"],
    answer: 0,
    explain: "口哨声音清楚，能帮助被困人员发出信号。"
  },
  {
    category: "应急准备",
    question: "手电筒在地震应急中有什么用？",
    options: ["停电或夜间照明", "照同学眼睛玩", "让房间更热"],
    answer: 0,
    explain: "地震后可能停电，手电能帮助照明和求救。"
  },
  {
    category: "错误行为辨析",
    question: "地震发生时乘电梯下楼为什么错误？",
    options: ["电梯可能停电卡住", "电梯速度太快", "电梯太亮"],
    answer: 0,
    explain: "地震可能造成停电或电梯故障，应走楼梯。"
  },
  {
    category: "错误行为辨析",
    question: "地震时跑到窗边看热闹，这种行为？",
    options: ["危险，玻璃可能破碎", "正确，可以看清外面", "无所谓"],
    answer: 0,
    explain: "窗边玻璃破碎会伤人，不能靠近。"
  },
  {
    category: "错误行为辨析",
    question: "撤离时抢拿贵重物品，主要问题是什么？",
    options: ["耽误逃生并增加危险", "东西会变轻", "可以提高分数"],
    answer: 0,
    explain: "紧急撤离时生命安全最重要，不能为物品返回或停留。"
  },
  {
    category: "错误行为辨析",
    question: "震后在班级群里传播“马上还有更大地震”的未证实消息，属于？",
    options: ["制造恐慌的错误行为", "热心提醒", "科学预测"],
    answer: 0,
    explain: "未证实消息不能传播，应以官方通知为准。"
  },
  {
    category: "错误行为辨析",
    question: "撤离到楼梯口时停下来聊天，会造成什么风险？",
    options: ["堵塞通道影响撤离", "提高撤离效率", "没有任何影响"],
    answer: 0,
    explain: "楼梯和通道必须保持畅通，不能停留。"
  },
  {
    category: "错误行为辨析",
    question: "地震后围观受损建筑为什么危险？",
    options: ["可能发生倒塌或余震", "建筑会自己修好", "围观能学知识"],
    answer: 0,
    explain: "受损建筑随时可能倒塌，应保持距离。"
  },
  {
    category: "错误行为辨析",
    question: "震后穿拖鞋跑过碎玻璃区域，这种做法？",
    options: ["危险，容易割伤脚", "安全，因为拖鞋轻", "能跑得更快"],
    answer: 0,
    explain: "震后地面可能有碎片，应穿结实鞋子避开。"
  },
  {
    category: "综合判断",
    question: "地震应对顺序更合理的是？",
    options: ["先避险，摇晃停止后再撤离", "先冲出门，再想办法", "先拍视频，再躲避"],
    answer: 0,
    explain: "摇晃时奔跑危险，应先就近避险，停止后有序撤离。"
  },
  {
    category: "综合判断",
    question: "地震避险中最需要保护的身体部位是？",
    options: ["头部和颈部", "书包", "鞋带"],
    answer: 0,
    explain: "头颈部容易受到坠落物伤害，需要重点保护。"
  },
  {
    category: "综合判断",
    question: "下面哪句话最符合科学避震原则？",
    options: ["冷静、护头、听指挥、有序撤离", "慌张、乱跑、抢东西", "围观、拍照、传谣言"],
    answer: 0,
    explain: "科学避震要冷静行动，保护自己并听从指挥。"
  }
];

const STORAGE_KEY = "earthquake_escape_leaderboard_v1";

const DRILL_STEPS = [
  {
    title: "震动预警",
    action: "检测到明显摇晃：立刻停止走动，提醒同学进入避险状态。"
  },
  {
    title: "桌下避险",
    action: "就近躲到结实课桌下，趴下、护住头颈、抓牢桌腿。"
  },
  {
    title: "主震停止",
    action: "确认摇晃减弱后，等待老师或广播发布撤离指令。"
  },
  {
    title: "有序撤离",
    action: "沿安全路线前往操场，护头慢行，不奔跑、不推挤。"
  },
  {
    title: "操场集合",
    action: "到达空旷集合点，按班级清点人数，等待安全确认。"
  }
];

const elements = {
  commandPanel: document.querySelector(".command-panel"),
  drillStartBtn: document.getElementById("drillStartBtn"),
  drillStage: document.getElementById("drillStage"),
  drillAction: document.getElementById("drillAction"),
  drillProgressBar: document.getElementById("drillProgressBar"),
  drillStepItems: document.querySelectorAll(".drill-steps span"),
  playerName: document.getElementById("playerName"),
  timerSelect: document.getElementById("timerSelect"),
  countSelect: document.getElementById("countSelect"),
  startBtn: document.getElementById("startBtn"),
  restartBtn: document.getElementById("restartBtn"),
  scoreValue: document.getElementById("scoreValue"),
  correctValue: document.getElementById("correctValue"),
  progressValue: document.getElementById("progressValue"),
  timeValue: document.getElementById("timeValue"),
  timeLabel: document.getElementById("timeLabel"),
  categoryBadge: document.getElementById("categoryBadge"),
  modeBadge: document.getElementById("modeBadge"),
  countdownPanel: document.getElementById("countdownPanel"),
  countdownTitle: document.getElementById("countdownTitle"),
  countdownValue: document.getElementById("countdownValue"),
  countdownBar: document.getElementById("countdownBar"),
  questionText: document.getElementById("questionText"),
  answerList: document.getElementById("answerList"),
  feedbackBox: document.getElementById("feedbackBox"),
  nextBtn: document.getElementById("nextBtn"),
  finishBtn: document.getElementById("finishBtn"),
  rankBody: document.getElementById("rankBody"),
  clearRankBtn: document.getElementById("clearRankBtn"),
  rocketTopBtn: document.getElementById("rocketTopBtn")
};

let state = createInitialState();
let drillTimerId = null;

function createInitialState() {
  return {
    running: false,
    answered: false,
    saved: false,
    mode: "timer",
    targetCount: 10,
    targetSeconds: 60,
    questions: [],
    currentIndex: 0,
    score: 0,
    correct: 0,
    answeredCount: 0,
    startTime: 0,
    elapsedSeconds: 0,
    remainingSeconds: 60,
    remainingMs: 60000,
    timerId: null,
    nickname: "匿名同学"
  };
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getSelectedMode() {
  return document.querySelector("input[name='quizMode']:checked").value;
}

function formatSeconds(value) {
  const minutes = Math.floor(value / 60).toString().padStart(2, "0");
  const seconds = Math.max(0, value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateModeBadge() {
  const mode = state.running ? state.mode : getSelectedMode();
  if (mode === "timer") {
    const seconds = state.running || state.startTime > 0 ? state.targetSeconds : Number(elements.timerSelect.value);
    elements.modeBadge.textContent = `倒计时 ${seconds} 秒`;
  } else {
    const count = state.running || state.startTime > 0 ? state.targetCount : Number(elements.countSelect.value);
    elements.modeBadge.textContent = `固定 ${count} 题`;
  }
  updateStats();
}

function startQuiz() {
  const mode = getSelectedMode();
  const targetSeconds = Number(elements.timerSelect.value);
  const targetCount = Number(elements.countSelect.value);
  const nickname = elements.playerName.value.trim();
  if (!nickname) {
    showNicknamePrompt();
    return;
  }

  clearRunningTimer();
  const questions = shuffle(QUESTION_BANK);

  state = {
    ...createInitialState(),
    running: true,
    mode,
    targetSeconds,
    targetCount,
    remainingSeconds: targetSeconds,
    remainingMs: targetSeconds * 1000,
    questions,
    startTime: Date.now(),
    nickname
  };

  elements.playerName.classList.remove("input-error");
  elements.nextBtn.disabled = true;
  elements.finishBtn.disabled = false;
  elements.feedbackBox.className = "feedback-box";
  elements.feedbackBox.textContent = "请选择答案。答题后会显示解析。";

  renderQuestion();
  updateStats();
  state.timerId = window.setInterval(tick, 200);
}

function showNicknamePrompt() {
  elements.playerName.classList.add("input-error");
  elements.playerName.focus();
  elements.categoryBadge.textContent = "需要昵称";
  elements.questionText.textContent = "请先输入昵称，再开始答题。";
  elements.answerList.innerHTML = "";
  elements.feedbackBox.className = "feedback-box error";
  elements.feedbackBox.textContent = "昵称用于保存排行榜，请填写后再启动训练。";
  elements.nextBtn.disabled = true;
  elements.finishBtn.disabled = true;
}

function clearNicknamePrompt() {
  if (elements.playerName.value.trim()) {
    elements.playerName.classList.remove("input-error");
  }
}

function tick() {
  if (!state.running) return;
  const elapsedMs = Date.now() - state.startTime;
  state.elapsedSeconds = Math.floor(elapsedMs / 1000);
  if (state.mode === "timer") {
    state.remainingMs = Math.max(0, state.targetSeconds * 1000 - elapsedMs);
    state.remainingSeconds = Math.ceil(state.remainingMs / 1000);
    if (state.remainingMs <= 0) {
      finishQuiz("倒计时结束，系统已自动保存本轮成绩。");
      return;
    }
  }
  updateStats();
}

function renderQuestion() {
  if (!state.running) return;
  const item = state.questions[state.currentIndex];
  if (!item) {
    finishQuiz("题库已完成，系统已保存本轮成绩。");
    return;
  }

  state.answered = false;
  elements.categoryBadge.textContent = item.category;
  elements.questionText.textContent = `${state.currentIndex + 1}. ${item.question}`;
  elements.answerList.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => chooseAnswer(index));
    elements.answerList.appendChild(button);
  });

  elements.nextBtn.disabled = true;
  elements.nextBtn.textContent = shouldFinishAfterCurrent() ? "完成并保存" : "下一题";
  updateModeBadge();
}

function chooseAnswer(index) {
  if (!state.running || state.answered) return;

  const item = state.questions[state.currentIndex];
  const buttons = [...document.querySelectorAll(".answer-btn")];
  const isCorrect = index === item.answer;

  state.answered = true;
  state.answeredCount += 1;
  if (isCorrect) {
    state.correct += 1;
    state.score += 10;
  }

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === item.answer) {
      button.classList.add("correct");
    } else if (buttonIndex === index) {
      button.classList.add("wrong");
    }
  });

  elements.feedbackBox.className = `feedback-box ${isCorrect ? "success" : "error"}`;
  elements.feedbackBox.textContent = `${isCorrect ? "回答正确！" : "回答错误。"}${item.explain}`;
  elements.nextBtn.disabled = false;
  elements.nextBtn.textContent = shouldFinishAfterCurrent() ? "完成并保存" : "下一题";
  updateStats();
}

function shouldFinishAfterCurrent() {
  if (state.mode === "count") {
    return state.answeredCount >= state.targetCount;
  }
  return state.currentIndex >= state.questions.length - 1;
}

function goNext() {
  if (!state.running || !state.answered) return;
  if (shouldFinishAfterCurrent()) {
    finishQuiz("本轮训练完成，成绩已保存到排行榜。");
    return;
  }
  state.currentIndex += 1;
  elements.feedbackBox.className = "feedback-box";
  elements.feedbackBox.textContent = "请选择答案。答题后会显示解析。";
  renderQuestion();
  updateStats();
}

function finishQuiz(message) {
  if (!state.running) return;
  const elapsedMs = Date.now() - state.startTime;
  clearRunningTimer();
  state.running = false;
  state.elapsedSeconds = Math.max(1, Math.floor(elapsedMs / 1000));
  if (state.mode === "timer") {
    state.remainingMs = Math.max(0, state.targetSeconds * 1000 - elapsedMs);
    state.remainingSeconds = Math.ceil(state.remainingMs / 1000);
    if (state.remainingMs <= 0) {
      state.elapsedSeconds = state.targetSeconds;
    }
  }
  elements.nextBtn.disabled = true;
  elements.finishBtn.disabled = true;

  const hasAnswers = state.answeredCount > 0;
  if (hasAnswers && !state.saved) {
    saveLeaderboardEntry();
    state.saved = true;
  }

  elements.categoryBadge.textContent = "训练结束";
  elements.questionText.textContent = hasAnswers
    ? `本轮得分：${state.score} 分，答对 ${state.correct} / ${state.answeredCount} 题`
    : "本轮未完成答题";
  elements.answerList.innerHTML = "";
  elements.feedbackBox.className = `feedback-box ${hasAnswers ? "success" : "error"}`;
  elements.feedbackBox.textContent = hasAnswers ? message : "本轮没有作答，不保存排行榜记录。";
  updateStats();
  renderLeaderboard();
}

function resetCurrentQuiz() {
  clearRunningTimer();
  state = createInitialState();
  elements.playerName.classList.remove("input-error");
  elements.categoryBadge.textContent = "待启动";
  elements.questionText.textContent = "点击“启动训练”，开始随机知识问答。";
  elements.answerList.innerHTML = "";
  elements.feedbackBox.className = "feedback-box";
  elements.feedbackBox.textContent = "训练开始后，每题作答会立即显示解析。";
  elements.nextBtn.disabled = true;
  elements.finishBtn.disabled = true;
  updateModeBadge();
  updateStats();
}

function clearRunningTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateStats() {
  const hasStarted = state.startTime > 0;
  const displayMode = state.running || hasStarted ? state.mode : getSelectedMode();
  elements.scoreValue.textContent = String(state.score);
  elements.correctValue.textContent = String(state.correct);
  const total = displayMode === "count"
    ? (state.running || hasStarted ? state.targetCount : Number(elements.countSelect.value))
    : QUESTION_BANK.length;
  elements.progressValue.textContent = `${state.answeredCount}/${total}`;
  if (displayMode === "timer") {
    const fallbackSeconds = Number(elements.timerSelect.value);
    const seconds = state.running || hasStarted ? state.remainingSeconds : fallbackSeconds;
    elements.timeValue.textContent = formatSeconds(seconds);
    elements.timeLabel.textContent = "剩余";
  } else {
    elements.timeValue.textContent = formatSeconds(state.elapsedSeconds);
    elements.timeLabel.textContent = "用时";
  }
  updateCountdownDisplay(displayMode);
}

function updateCountdownDisplay(displayMode) {
  const hasStarted = state.startTime > 0;
  const mode = displayMode || (state.running || hasStarted ? state.mode : getSelectedMode());
  elements.countdownPanel.classList.remove("warning", "danger");

  if (mode === "timer") {
    const targetSeconds = state.running || hasStarted ? state.targetSeconds : Number(elements.timerSelect.value);
    const totalMs = targetSeconds * 1000;
    const remainingMs = state.running || hasStarted ? state.remainingMs : totalMs;
    const remainingSeconds = state.running || hasStarted ? state.remainingSeconds : targetSeconds;
    const percent = totalMs > 0 ? Math.max(0, Math.min(100, (remainingMs / totalMs) * 100)) : 0;
    elements.countdownTitle.textContent = state.running
      ? "倒计时进行中"
      : hasStarted && remainingSeconds <= 0
        ? "倒计时结束"
        : "倒计时准备";
    elements.countdownValue.textContent = formatSeconds(remainingSeconds);
    elements.countdownBar.style.width = `${percent}%`;
    if (state.running && remainingSeconds <= 10) {
      elements.countdownPanel.classList.add("danger");
    } else if (state.running && remainingSeconds <= 20) {
      elements.countdownPanel.classList.add("warning");
    }
    return;
  }

  const targetCount = state.running || hasStarted ? state.targetCount : Number(elements.countSelect.value);
  const percent = targetCount > 0 ? Math.max(0, Math.min(100, (state.answeredCount / targetCount) * 100)) : 0;
  elements.countdownTitle.textContent = state.running ? "固定题数进行中" : "固定题数准备";
  elements.countdownValue.textContent = `${state.answeredCount}/${targetCount} 题`;
  elements.countdownBar.style.width = `${percent}%`;
}

function saveLeaderboardEntry() {
  if (state.answeredCount === 0) return;
  const records = getLeaderboard();
  const accuracy = state.answeredCount === 0 ? 0 : Math.round((state.correct / state.answeredCount) * 100);
  const entry = {
    nickname: state.nickname,
    mode: state.mode === "timer" ? `倒计时${state.targetSeconds}秒` : `固定${state.targetCount}题`,
    score: state.score,
    correct: state.correct,
    total: state.answeredCount,
    accuracy,
    duration: state.elapsedSeconds,
    timestamp: Date.now()
  };
  records.push(entry);
  const sorted = sortLeaderboard(records).slice(0, 10);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted));
}

function getLeaderboard() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function sortLeaderboard(records) {
  return [...records].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
    if (a.duration !== b.duration) return a.duration - b.duration;
    return b.timestamp - a.timestamp;
  });
}

function renderLeaderboard() {
  const records = sortLeaderboard(getLeaderboard()).slice(0, 10);
  elements.rankBody.innerHTML = "";
  if (records.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `<td class="empty-rank" colspan="7">暂无排名。完成一次训练后会显示在这里。</td>`;
    elements.rankBody.appendChild(row);
    return;
  }

  records.forEach((record, index) => {
    const row = document.createElement("tr");
    const date = new Date(record.timestamp).toLocaleDateString("zh-CN", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
    row.innerHTML = `
      <td>#${index + 1}</td>
      <td>${escapeHtml(record.nickname)}</td>
      <td>${record.mode}</td>
      <td>${record.score}</td>
      <td>${record.accuracy}% (${record.correct}/${record.total})</td>
      <td>${formatSeconds(record.duration)}</td>
      <td>${date}</td>
    `;
    elements.rankBody.appendChild(row);
  });
}

function clearLeaderboard() {
  const confirmed = window.confirm("确定清空本机排行榜吗？这个操作不能恢复。");
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEY);
  renderLeaderboard();
}

function resetDrillClasses() {
  elements.commandPanel.classList.remove("drill-active");
  DRILL_STEPS.forEach((_, index) => {
    elements.commandPanel.classList.remove(`drill-stage-${index}`);
  });
  elements.drillStepItems.forEach((item) => {
    item.classList.remove("active");
  });
}

function setDrillStep(index) {
  const step = DRILL_STEPS[index];
  resetDrillClasses();
  elements.commandPanel.classList.add("drill-active", `drill-stage-${index}`);
  elements.drillStage.textContent = step.title;
  elements.drillAction.textContent = step.action;
  elements.drillProgressBar.style.width = `${((index + 1) / DRILL_STEPS.length) * 100}%`;
  elements.drillStepItems.forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex <= index);
  });
}

function startDrill() {
  if (drillTimerId) {
    window.clearTimeout(drillTimerId);
  }

  let index = 0;
  elements.drillStartBtn.textContent = "重新演练";
  setDrillStep(index);

  const advance = () => {
    index += 1;
    if (index >= DRILL_STEPS.length) {
      drillTimerId = null;
      elements.drillStage.textContent = "演练完成";
      elements.drillAction.textContent = "已经完成一次完整流程：预警、避险、撤离、集合。";
      elements.drillProgressBar.style.width = "100%";
      return;
    }
    setDrillStep(index);
    drillTimerId = window.setTimeout(advance, 1500);
  };

  drillTimerId = window.setTimeout(advance, 1500);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("input[name='quizMode']").forEach((input) => {
  input.addEventListener("change", updateModeBadge);
});
elements.timerSelect.addEventListener("change", updateModeBadge);
elements.countSelect.addEventListener("change", updateModeBadge);
elements.startBtn.addEventListener("click", startQuiz);
elements.restartBtn.addEventListener("click", resetCurrentQuiz);
elements.nextBtn.addEventListener("click", goNext);
elements.finishBtn.addEventListener("click", () => finishQuiz("你已手动结束训练，成绩已保存到排行榜。"));
elements.clearRankBtn.addEventListener("click", clearLeaderboard);
elements.drillStartBtn.addEventListener("click", startDrill);
elements.rocketTopBtn.addEventListener("click", scrollToTop);
elements.playerName.addEventListener("input", clearNicknamePrompt);

updateModeBadge();
updateStats();
renderLeaderboard();
