// ─── Types ──────────────────────────────────────────────────────────────────

export type BlockType = "warmup" | "skill" | "drill" | "game" | "social" | "cool";

export interface DrillError {
  mistake: string;
  fix: string;
}

export interface Progression {
  label: string;
  desc: string;
}

export interface Guide {
  setup: string;
  steps: string[];
  progressions?: Progression[];
  errors?: DrillError[];
  filler?: string;
}

export interface TimelineBlock {
  time: string;
  icon: string;
  label: string;
  type: BlockType;
  desc: string;
  guide?: Guide;
}

export interface Cue {
  label: string;
  text: string;
}

export interface YouTubeVideo {
  title: string;
  sub: string;
  url: string;
}

export interface AssessmentItem {
  skill: string;
  target: string;
}

export interface Session {
  num: number;
  title: string;
  priority: string;
  subtitle: string;
  complexity?: boolean;
  timeline: TimelineBlock[];
  objectives: string[];
  equipment: string[];
  coachTip?: string;
  cues?: Cue[];
  youtube: YouTubeVideo[];
  mistakes?: string[];
  assessment?: AssessmentItem[];
}

export interface Level {
  name: string;
  duration: string;
  skill: string;
  drills: string;
  colorClass: string;
  sessions: Session[];
}

export type CurriculumData = Record<number, Level>;

// ─── Data ────────────────────────────────────────────────────────────────────

export const curriculum: CurriculumData = {
  1: {
    name: "Level 1 — Beginner",
    duration: "60 min",
    skill: "0→3.0",
    drills: "24+",
    colorClass: "l1",
    sessions: [
      {
        num: 1,
        title: "Welcome to Pickleball", priority: "Every player can name the kitchen, the baseline, and the double-bounce rule, and move safely around the court.",
        subtitle: "Court Orientation · Equipment · Rules Intro · First Rally",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Warm-Up & Introductions", type:"warmup", desc:"Light jog, introductions, equipment hand-out, safety briefing on court" , guide: { setup: "Players in a loose circle at centre court with paddles.", steps: ["Single-file jog around the perimeter of the court — 1 lap at a light pace.", "Stop. Introductions circle: each player says their name + one word for why they joined.", "Safety briefing: no sprinting to retrieve balls on neighbouring courts; call 'Ball on!' loudly.", "Hand out paddles — show forehand side vs backhand side; correct the 'frying pan' grip right now if you see it."], errors: [{mistake: "Holding paddle like a frying pan (palm flat under handle)", fix: "\"Shake hands with the handle — palm to the side, not the bottom. Your V goes on top.\""}
, {mistake: "Players too shy to participate in introductions", fix: "Go first yourself. Model the energy you want. A relaxed coach = relaxed group."}
], filler: "Quick demo: hit a 10-shot rally yourself or with a helper so players see what they're working toward. Gets excitement up instantly." }},
          { time:"10–25", icon:"📐", label:"Court Tour & Rules Overview", type:"skill", desc:"Walk the court: baseline, kitchen (NVZ), sidelines, net height. Cover double-bounce rule, kitchen faults, 3-number scoring basics" , guide: { setup: "Walk players onto the court together. Stand at the baseline to start.", steps: ["Baseline: 'This is home. You serve from here.' Step on the line. Show both sidelines.", "Kitchen (NVZ): walk to the line, tap it with your paddle. 'Never volley while you're in here.'", "Net: show it's lower in the middle (34\") vs sides (36\"). 'Most shots should clear the lowest point.'", "Double-bounce rule: physically mime all 4 shots — serve, bounce, return, bounce. Say it as you do it.", "Scoring preview: 'Three numbers — my score, their score, server number. Don't worry, we practice this in Session 6.'"], errors: [{mistake: "Players think the kitchen = danger zone they can never enter", fix: "Step into the kitchen yourself and let a ball bounce. 'See? Totally legal. Only VOLLEYS from in here are faults.'"}
, {mistake: "Players confused by the double-bounce rule", fix: "Say: 'First two shots MUST bounce. After that, you choose.' Repeat it three times."}
], filler: "Zone quiz: point to random court areas, players call the name out loud. First correct answer wins. Quick and keeps them sharp." }},
          { time:"25–40", icon:"🏓", label:"Paddle & Ball Familiarization", type:"drill", desc:"Bounce ball on paddle (target: 10 sec), toss-and-catch, gentle rally over net, explore forehand/backhand sides" , guide: { setup: "Each player with paddle + 1 ball. Partners face each other 4–6 feet apart near the net.", steps: ["Bouncing challenge: bounce ball on paddle face, target 10 consecutive. Coach counts loudly.", "Flip: same on the backhand (non-dominant) face.", "Toss-and-catch: toss ball 1m up, catch it on the paddle face without using your other hand.", "Slow tap rally: gentle taps back and forth with partner over the net — no competition, just keep it alive.", "Milestone rule: every time a pair hits 5 in a row, both take one step back."], progressions: [{label: "Foundation", desc: "Bounce on paddle, stationary — build feel for ball on face."}
, {label: "Build", desc: "Slow tap rally across net. Partners 10 ft apart."}
, {label: "Challenge", desc: "Expand distance each time they hit 5 in a row. Push for 10+ consecutive."}
], errors: [{mistake: "Swinging too hard on gentle taps — ball goes wild", fix: "\"Think tea cup, not tennis. Guide the ball, don't hit it.\""}
, {mistake: "Watching partner instead of the ball", fix: "\"Eyes on ball until it touches your paddle — every single time.\""}
], filler: "Balance walk: ball resting on paddle face, walk from baseline to kitchen line without dropping it. Great focus builder." }},
          { time:"40–55", icon:"🎮", label:"Mini Cooperative Rally Game", type:"game", desc:"Pairs attempt 5-hit rallies. No scoring pressure. Coach circulates for form correction" , guide: { setup: "Same pairs anywhere on court. Goal is cooperation — zero scoring pressure.", steps: ["Pairs count consecutive hits aloud together: 'One... two... three...'", "If ball drops, restart from zero. No frustration — just restart.", "Milestone targets: first aim for 5, then 8, then 10.", "Final 5 min: 'Personal best round' — coach announces it, pairs try to beat their own record.", "Coach circulates: give one micro-tip per pair only ('meet it a bit earlier')."], progressions: [{label: "Foundation", desc: "5 consecutive — pure contact, no target."}
, {label: "Build", desc: "8 consecutive — start maintaining a rally position."}
, {label: "Challenge", desc: "10+ — take one step back with each milestone."}
], errors: [{mistake: "Hitting too hard trying to 'win'", fix: "Remind: 'This is cooperative. Slow it way down — the goal is to keep it going, not to end it.'"}
, {mistake: "One player doing all the work (moving to cover partner)", fix: "\"Stay in your spot. If the ball comes to your partner's side, let it go. Reset and try again.\""}
], filler: "Soft hands: both players hold paddle with 3 fingers only (no full grip). See if the rally gets more controlled — it usually does." }},
          { time:"55–60", icon:"🧊", label:"Cool Down & Q&A", type:"cool", desc:"Stretch, recap rules. Handout: 10 Must-Know Pickleball Rules" }
        ],
        objectives: [
          "Identify all court zones and boundary lines by name",
          "State the double-bounce rule correctly",
          "Hold the paddle correctly and rally 5+ shots cooperatively",
          "Know basic court etiquette and safety rules"
        ],
        equipment: ["Paddles (1/player)","Pickleballs × 6","Net","Cones","Rules Handout"],
        coachTip: "Keep this session fun and low-pressure. The goal is excitement about the sport, not perfection. Tell the story of how pickleball was invented — students love hearing about the dog named Pickles!",
        cues: [
          { label:"Double-bounce rule", text:"Ball must bounce once on each side before volleys are allowed" },
          { label:"Kitchen rule", text:"Cannot volley from inside the NVZ (kitchen)" },
          { label:"Serve", text:"Always underhand, below waist, upward arc" },
          { label:"Scoring", text:"Only serving team scores; play to 11, win by 2" }
        ],
        youtube: [
          { title:"Learn Pickleball in 5 Minutes", sub:"Zane Navratil — short, recent, clean rules overview", url:"https://www.youtube.com/watch?v=TCw6YwRW4BE" },
          { title:"Pickleball Court Dimensions Explained", sub:"Visual court walkthrough for new players", url:"https://www.youtube.com/watch?v=RF5RyCh7GNc" },
          { title:"Pickleball for Absolute Beginners", sub:"Equipment, etiquette & first steps", url:"https://www.youtube.com/watch?v=I1p7NwhGPOc" }
        ]
      },
      {
        num: 2,
        title: "Grip & Groundstrokes", priority: "Every player holds the Eastern grip correctly and makes controlled forehand contact from a coach/partner feed.",
        subtitle: "Eastern Grip · Forehand Drive · Backhand Drive · Ready Position",
        timeline: [
          { time:"0–8", icon:"🔥", label:"Warm-Up", type:"warmup", desc:"Shoulder circles, wrist rotations, side-shuffles along the baseline" },
          { time:"8–22", icon:"🤝", label:"Grip Clinic", type:"skill", desc:"Demonstrate Eastern 'handshake' grip. Coach checks each student. Introduce ready position: knees bent, paddle up, weight on balls of feet" , guide: { setup: "Everyone holds paddle, standing in a line or open formation. Coach at front with clear sightlines.", steps: ["Demonstrate Eastern grip: V formed by thumb and index finger sits on the top bevel of the handle. Show up close.", "Players mimic. Coach walks the line and checks every single player — don't skip anyone.", "Fix the two most common mistakes (see below) before moving on.", "Ready position: knees bent ~15°, weight on balls of feet, paddle at belly-button height angled slightly forward.", "Grip switch drill: call 'forehand!' or 'backhand!' — players rotate grip slightly and freeze. Coach checks. 5 reps each."], progressions: [{label: "Foundation", desc: "Grip check stationary — get the V right before adding movement."}
, {label: "Build", desc: "Grip + ready position — combine hold with athletic stance."}
, {label: "Challenge", desc: "Speed drill: call FH/BH randomly fast. Players switch and hold for coach inspection."}
], errors: [{mistake: "Hammer grip — thumb wrapped over knuckles like a fist", fix: "\"Shake hands with the paddle. Look at your V — it should sit right on the TOP flat edge of the handle.\""}
, {mistake: "Death grip — knuckles white, arm tense", fix: "\"Scale of 1–10 — you want a 4. Firm enough to not drop it, loose enough to wiggle your fingers.\""}
], filler: "Partner grip check: each player checks their partner's grip and gives a thumbs up or correction. Builds peer learning habit." }},
          { time:"22–38", icon:"🏓", label:"Forehand Groundstroke Drill", type:"drill", desc:"Pendulum swing from shoulder. Partner feeds slow balls. Target: land 6/10 in back half of court" , guide: { setup: "Pairs. Feeder (A) stands at mid-court or kitchen line with 6–8 balls. Hitter (B) stands at baseline. Switch every 10 hits.", steps: ["Feeder tosses ball underhand — slow, gentle arc to hitter's forehand side.", "Hitter: Eastern grip, ready position, step forward with non-dominant foot.", "Swing from shoulder — pendulum motion, NOT from elbow or wrist.", "Contact point: in front of lead hip, not beside the body.", "Follow through: paddle finishes near opposite shoulder.", "Target: back half of opposite court. Place a cone at 75% depth."], progressions: [{label: "Foundation", desc: "Feeder tosses mid-court, slow arc. Hitter focuses only on contact point — ball can go anywhere."}
, {label: "Build", desc: "Hitter aims for back half of court. Count: how many of 10 land in the target zone?"}
, {label: "Challenge", desc: "Feeder moves to baseline. Hitter must generate their own pace while maintaining form."}
], errors: [{mistake: "Elbow-driven swing — choppy and inconsistent", fix: "\"Freeze at contact — is your elbow bent or straight? Drive from the shoulder. Elbow stays firm.\""}
, {mistake: "Ball going into the net", fix: "\"Contact is too late — the ball is beside your hip, not in front. Meet it early.\""}
, {mistake: "Ball going long past the baseline", fix: "\"Follow-through is going straight up. Angle it more forward and slightly down on the finish.\""}
], filler: "Target game: 1pt for landing in the back half, 2pts for hitting the cone. 10 balls, track score — makes the drill competitive." }},
          { time:"38–52", icon:"🏓", label:"Backhand Groundstroke Drill", type:"drill", desc:"Closed stance, shoulder rotation. Contact point out in front — not beside the body" , guide: { setup: "Same pairs. Feeder now tosses to hitter's backhand side. Recommend two-handed backhand for beginners.", steps: ["Show two-hand grip: non-dominant hand on top of grip (choking up), dominant hand guides below.", "Closed stance: back foot points to the sideline, body turns away from net before swinging.", "Rotate hips and shoulders through the swing — it's a full body motion.", "Contact in front of the lead knee — not beside or behind.", "Follow through: both hands finish near opposite shoulder.", "10 hits, switch. Feeder targets the same spot consistently at first."], progressions: [{label: "Foundation", desc: "Hand-feed directly to backhand zone. No lateral movement — pure mechanics."}
, {label: "Build", desc: "Feeder mixes FH and BH alternating — hitter must pivot and reset."}
, {label: "Challenge", desc: "Random FH/BH — hitter must call 'FH' or 'BH' as they prepare, forcing early decision."}
], errors: [{mistake: "Running around the backhand to hit a forehand", fix: "Stop play: 'Show me your backhand from right there.' Force it. Avoidance becomes a lifelong habit."}
, {mistake: "Contact beside or behind the body", fix: "\"Turn your shoulders before you swing. Your shoulder turn IS the backswing — start it early.\""}
, {mistake: "Chicken-wing elbow flying out", fix: "\"Tuck the elbow toward the ground at contact. Keep it pointing down, not out.\""}
], filler: "Alternate rally: feeder calls 'FH' or 'BH' before each toss. Hitter must hit the correct side. Builds reaction and versatility." }},
          { time:"52–60", icon:"🎮", label:"Groundstroke Rally Game", type:"game", desc:"Pairs rally baseline-to-baseline using both FH and BH. Aim for 8+ consecutive hits" , guide: { setup: "Same pairs, both now at baseline. Free rally across the full court.", steps: ["Count consecutive hits aloud. Goal: 8+ consecutive.", "Both players must use proper grip and swing — no frying-pan slaps.", "Coach circulates, gives one brief cue per pair while play continues.", "Final 2 min: 'Personal best round' — pairs try to beat their highest count."], progressions: [{label: "Foundation", desc: "8 consecutive — focus on consistency over placement."}
, {label: "Build", desc: "Aim groundstrokes to back half of court — add depth to the consistency goal."}
, {label: "Challenge", desc: "Win condition: both players must hit 3 in a row before going for a winner."}
], errors: [{mistake: "Reverting to wrist/elbow swing when rallying", fix: "\"Every time you hit, check: am I swinging from the shoulder? Freeze your wrist.\""}
], filler: "'Last 3' game: pairs play a mini baseline game. A point can only be scored after 3 consecutive shots have landed in — forces control before going for winners." }}
        ],
        objectives: [
          "Form the Eastern grip correctly on command",
          "Demonstrate correct ready position stance",
          "Execute a pendulum forehand with shoulder rotation",
          "Hit 5/10 backhands into the court consistently"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cones"],
        coachTip: "Use the 'broomstick' visualization: imagine a stick from shoulder to paddle keeping the arm straight. Most common error: backhand contact too close to the body.",
        cues: [
          { label:"Grip", text:"\"Shake hands with the paddle\" — V on top bevel" },
          { label:"Swing", text:"From shoulder — keep elbow/wrist firm" },
          { label:"Backhand", text:"Turn feet, rotate core through the ball" },
          { label:"Contact", text:"Always meet ball out in front of body" }
        ],
        mistakes: [
          "Gripping too tight — causes arm fatigue and poor feel",
          "Running around the backhand instead of hitting it",
          "Swinging from elbow/wrist rather than shoulder",
          "Not rotating hips/shoulders through the shot"
        ],
        youtube: [
          { title:"The Eastern Forehand Grip Guide", sub:"Mark Renneson / Selkirk — beginner-focused grip mechanics and ready position", url:"https://www.youtube.com/watch?v=8eqAuFaAd_E" },
          { title:"Pickleball Forehand Groundstroke", sub:"Pendulum swing technique for beginners", url:"https://www.youtube.com/watch?v=5FIeT3GG6Q8" },
          { title:"Beginner Pickleball Backhand Lesson", sub:"Backhand stance, contact point, consistency", url:"https://www.youtube.com/watch?v=YOOjk3bDhzw" }
        ]
      },
      {
        num: 3,
        title: "The Serve", priority: "Every player executes a legal underhand serve into the correct diagonal service box.",
        subtitle: "Underhand Serve · Drop Serve · Placement & Depth",
        timeline: [
          { time:"0–8", icon:"🔥", label:"Warm-Up + Grip Review", type:"warmup", desc:"Dynamic stretching, quick grip quiz, review previous rally skills" },
          { time:"8–22", icon:"📖", label:"Serve Rules & Mechanics", type:"skill", desc:"Underhand contact below waist, upward arc. Stand behind baseline. Serve diagonally. Cannot land on kitchen line" , guide: { setup: "Coach demonstrates from behind the baseline. Players watch first.", steps: ["Show illegal serve first: overhead swing, sidearm, contact above waist. 'This is NOT legal in pickleball.'", "Show legal serve: underhand, contact below waist, paddle arc moves UPWARD at contact.", "Three checkpoints: (1) contact below waist, (2) upward arc at contact, (3) standing behind the baseline.", "Players shadow swing the legal serve motion × 5 (no ball yet).", "Ball in hand: practice the release + contact in place — just drop and swing, no full serve attempt yet."], errors: [{mistake: "Tossing the ball too high then hitting it on the downswing", fix: "\"Barely a toss — just release from waist height and swing. The arc comes from the swing, not the toss.\""}
, {mistake: "Contact at chest or shoulder height", fix: "Place your hand at waist level: 'Below this. Every time.'"}
], filler: "Legal or illegal quiz: coach calls out 7 scenarios rapidly, players answer together. 'Overhead serve?' (Illegal). 'Ball dropped and bounced first?' (Legal — drop serve). Gets the rules locked in fast." }},
          { time:"22–38", icon:"🏓", label:"Volley Serve Drill", type:"drill", desc:"25 serves each: aim for deep back court. Cones in target zones. Track success rate" , guide: { setup: "2 players per court, behind baseline. 5 balls each. Serve diagonally into the correct service box. Cone targets at back third of box.", steps: ["Player hits 5 serves then retrieves balls and passes to next player.", "Before each serve, call the target zone: 'Zone A' (deep back quarter) or 'Zone B' (centre-back).", "Track: how many of 5 land in the service box? How many reach the target zone?", "Complete 2 full rotations each."], progressions: [{label: "Foundation", desc: "Legal serve in ANY part of the service box = success."}
, {label: "Build", desc: "Must land in the back HALF of the service box."}
, {label: "Challenge", desc: "Call your target corner before serving. 1pt for box, 2pts for the cone."}
], errors: [{mistake: "Serve landing in the kitchen (fault)", fix: "\"Either contact is too far in front or arc is downward. Think: toss-up, swing-up.\""}
, {mistake: "Serve going wide out of bounds", fix: "\"Check your feet — are they pointing at the TARGET box? Aim your body first, then swing.\""}
], filler: "Pressure serves: 2 attempts to get 1 legal deep serve. First player to 3 successful pressure serves wins the round." }},
          { time:"38–50", icon:"🏓", label:"Drop Serve Drill", type:"drill", desc:"Bounce ball then serve — great for timing issues. 20 serves to alternating service boxes" , guide: { setup: "Same formation and targets as the volley serve drill.", steps: ["Demonstrate drop serve: ball must be dropped from hand (no toss upward) and must bounce once.", "Key feeling: the ball bounces UP toward your paddle — you wait for it, don't chase it down.", "Players alternate: 2 volley serves, 2 drop serves. Feel the timing difference.", "20 total serves (10 each type). Track which feels more consistent."], progressions: [{label: "Foundation", desc: "Just get the drop serve legal — drop, bounce, hit."}
, {label: "Build", desc: "Drop serve aimed at back half — add placement to the legal mechanics."}
, {label: "Challenge", desc: "Mix drop and volley serves in sequence. Partner tries to predict which is coming."}
], errors: [{mistake: "Rushing — hitting before the ball comes back up from the bounce", fix: "\"Wait. The ball bounces UP to you. You don't go DOWN to it. Pause after the bounce.\""}
, {mistake: "Tossing the ball upward (makes it illegal)", fix: "Show the difference: a true drop (ball falls) vs a toss (ball goes up). 'It must fall — gravity only.'"}
], filler: "Disguise test: server hits the serve but says 'volley' or 'drop' AFTER contact. Partner guesses which type it was. Hard to disguise = easier to read in a game." }},
          { time:"50–60", icon:"🎮", label:"Serve + Return Mini-Game", type:"game", desc:"Server scores 1pt if deep; returner scores 1pt if ball lands past midcourt. 10 attempts each" , guide: { setup: "Pairs at baseline — one server, one returner. 10 rounds each, then switch roles.", steps: ["Server scores 1pt if serve lands in the deep half of the service box.", "Returner scores 1pt if their return lands past the mid-court service line T.", "Play 10 serves, track score, switch. Play 2 rounds each.", "Debrief together: 'What was harder — serving deep or returning deep?'"], progressions: [{label: "Foundation", desc: "Server just aims for any legal serve; returner just keeps ball in play."}
, {label: "Build", desc: "Both track their 'depth' score — how many land in the target zones."}
, {label: "Challenge", desc: "Returner gets bonus pt if they immediately take a step forward toward the kitchen after contact."}
], errors: [{mistake: "Returner stands too close to the baseline", fix: "\"Start 2 feet BEHIND the baseline. A deep serve will push you back — if you're already back, you're ready.\""}
], filler: "Add to the rally: after returner hits the return, play out the full point — no stopping after the return. Introduces real game flow." }}
        ],
        objectives: [
          "Execute a legal underhand serve with correct mechanics",
          "Land 7/10 serves in the correct diagonal service box",
          "Understand the drop serve as an alternative method",
          "Aim serves with purposeful depth and placement"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cones (3 target zones)"],
        coachTip: "Serve deep! A deep serve forces opponents to stay back longer. Use cone targets at 75% court depth to build consistent muscle memory for placement.",
        cues: [
          { label:"Contact", text:"Below the waist, paddle arc moves upward" },
          { label:"Stance", text:"Stand behind baseline; feet inside sidelines" },
          { label:"Direction", text:"Serve diagonally; must clear the kitchen line" },
          { label:"Fault", text:"Kitchen line contact = fault" }
        ],
        youtube: [
          { title:"Pickleball Serve Tutorial for Beginners", sub:"Serve rules, stance, drop serve explained", url:"https://www.youtube.com/watch?v=HtaMX3f5zyE" },
          { title:"How to Serve in Pickleball — Complete Guide", sub:"Legal serve mechanics & placement tips", url:"https://www.youtube.com/watch?v=gpoifV4-xdk" },
          { title:"The Drop Serve Explained", sub:"Drop serve for beginners with timing issues", url:"https://www.youtube.com/watch?v=N43DwVEZoqk" }
        ]
      },
      {
        num: 4,
        title: "The Kitchen & Dinking", priority: "Every player understands the NVZ fault and can sustain a 5-shot legal dink rally with a partner.",
        subtitle: "NVZ Rules · Dink Mechanics · Soft Game · Cross-Court Dinks",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Kitchen Walks Warm-Up", type:"warmup", desc:"Walk to kitchen line, tap it, shuffle back. Gets players familiar with the NVZ boundary. Light stretching" , guide: { setup: "Players spread along one kitchen line.", steps: ["Walk forward to the kitchen line, tap it with your paddle.", "Shuffle laterally along the kitchen line from sideline to sideline.", "Backpedal to the baseline without turning around.", "Repeat going the other direction. 3 full loops.", "Follow with arm swings, wrist circles, and lateral shuffle bursts."], errors: [{mistake: "Players don't know where the kitchen line is yet", fix: "Tap it with your paddle first, look them in the eye: 'This line is the most important line in pickleball. Learn it.'"}
], filler: "Kitchen tag: soft rally near the kitchen. If your opponent can get you to step into the kitchen while volleying, they win a point." }},
          { time:"10–22", icon:"📖", label:"NVZ Rules & Dink Definition", type:"skill", desc:"Cannot volley from inside kitchen. Dink = soft shot that arcs into opponent's kitchen. Why dink? Controls pace, forces errors" , guide: { setup: "Coach demonstrates at the net. Players watch.", steps: ["Demo fault #1: step into the kitchen while volleying (foot on or over the line).", "Demo fault #2: momentum carries you into the kitchen AFTER volleying — still a fault.", "Demo what IS legal: step INTO the kitchen to hit a ball that has BOUNCED — show this clearly.", "Define the dink: soft arc shot, peaks just above the net tape, drops into the opponent's kitchen.", "Show what a dink is NOT: a drive (too hard) or a push (too short/into the net)."], errors: [{mistake: "Players think they can never go near the kitchen", fix: "Walk into the kitchen yourself: 'I can be here all day. I just can't VOLLEY from here.' Hit a bounced ball from inside the kitchen to demonstrate."}
, {mistake: "Confusing 'kitchen' with 'service box'", fix: "Point to both: 'Kitchen = the box right up at the net. Service box = the bigger area behind it.' Name them three times."}
], filler: "Kitchen fault quiz: 5 rapid-fire scenarios. Players call 'fault' or 'legal' together out loud. Fast, noisy, memorable." }},
          { time:"22–38", icon:"🏓", label:"Dink Mechanics Drill", type:"drill", desc:"Both at kitchen line. Short gentle swing. Ball must clear net and land in opponent's NVZ. Target: 10 consecutive dinks" , guide: { setup: "Both players at their own kitchen line, facing each other across the net. Partners.", steps: ["Feeder tosses a soft underhand ball into partner's kitchen. Partner lets it bounce, then returns with a dink.", "Short, controlled pendulum swing — elbow stays close to body.", "Contact below net height — you're hitting UP and over the tape with an open paddle face.", "Ball should clear net and drop softly into the opponent's kitchen box.", "Count consecutive dinks aloud together. Aim: 5 → 8 → 10.", "If ball goes long or into the net, restart the count."], progressions: [{label: "Foundation", desc: "Feeder hand-tosses, partner dinks back. No full rally yet — just one dink at a time."}
, {label: "Build", desc: "Full dink rally — both players hitting dinks, counting to 10."}
, {label: "Challenge", desc: "One player randomly speeds up — the other must reset with a soft dink. Introduces decision-making."}
], errors: [{mistake: "Ball lands past the kitchen (too much power)", fix: "\"Finish your swing at hip height, not shoulder height. Short follow-through = shorter shot.\""}
, {mistake: "Ball goes into the net", fix: "\"Open your paddle face slightly — angle it upward. The ball needs to clear the tape first, then drop.\""}
, {mistake: "Stepping into kitchen while volleying", fix: "Stop play, point to their feet: 'Kitchen. Fault.' No lecture needed — just the call."}
], filler: "Silent dink: both players must sustain 15+ dinks in complete silence. No counting. Builds concentration and paddle communication." }},
          { time:"38–50", icon:"🏓", label:"Cross-Court Dink Drill", type:"drill", desc:"Dink diagonally across court. Partners alternate forehand and backhand dinks" , guide: { setup: "Partners at diagonal kitchen corners. Player A at right corner, Player B at left corner across the net.", steps: ["Both dink cross-court only — corner to corner, diagonal.", "The ball should cross the lowest part of the net (centre) and land in the diagonal kitchen square.", "3 minutes on this diagonal, then both switch to the OTHER diagonal (both move).", "Final 3 minutes: free choice — cross-court OR straight, no announcement. Partner must read and react."], progressions: [{label: "Foundation", desc: "Cross-court only, stationary positioning."}
, {label: "Build", desc: "Aim for the far corner of the kitchen — not just 'in the box.'"}
, {label: "Challenge", desc: "Free mix: cross-court or straight. No calling — opponent must read the paddle angle."}
], errors: [{mistake: "Dinking over the highest part of the net (hitting straight across)", fix: "\"For cross-court, the net is lower in the middle. AIM for the middle of the net — it's actually easier.\""}
, {mistake: "Both players drifting toward the middle, losing the angle", fix: "Remind players to stay in their corner position — the angle is the whole point."}
], filler: "Cross-court target: small cone in each diagonal kitchen corner. 2pts for touching the cone, 1pt for landing in the box. 15 dinks, track score." }},
          { time:"50–60", icon:"🎮", label:"Dink-Only Rally Game", type:"game", desc:"Points from kitchen line only. Ball past kitchen = fault. Win with patience and consistency" , guide: { setup: "Kitchen line vs kitchen line. All shots must land in the opponent's kitchen. Singles or doubles.", steps: ["Start each rally with a soft underhand tap from the kitchen line.", "Any ball landing past the kitchen or in the net = point for opponent.", "First to 7, win by 1.", "Coach circulates — call kitchen violations immediately.", "After each game: 'How did it feel to slow the game down that much?'"], progressions: [{label: "Foundation", desc: "Pure dink-only game. No drives, no smashes."}
, {label: "Build", desc: "Standard dink game but add: if you sustain 10 dinks before winning the point, it counts double."}
, {label: "Challenge", desc: "One player gets to speed up ONE ball per rally. Other player must reset it. Introduces the dink-to-attack decision."}
], errors: [{mistake: "Players keep trying to smash or drive instead of dinking", fix: "Reinforce: 'The ONLY legal shot in this game is a dink. Hard ball = immediate point to opponent.' Enforce strictly."}
], filler: "Streak bonus: if you reach a streak of 15 dinks in a single rally during the game, both players earn a free point. Rewards patience." }}
        ],
        objectives: [
          "Explain the NVZ (kitchen) rule accurately",
          "Execute a controlled dink landing in opponent's kitchen",
          "Sustain a 10-shot dink rally with a partner",
          "Distinguish when to dink vs. drive the ball"
        ],
        equipment: ["Paddles","Pickleballs × 4","Net","Tape/cones for NVZ line"],
        coachTip: "The dink separates pickleball from every other racquet sport. Players who master dinking win far more games at the 3.0–3.5 level. Patience beats power every time.",
        cues: [
          { label:"Paddle angle", text:"Slightly open face (angled upward)" },
          { label:"Swing", text:"Short controlled pendulum arm motion" },
          { label:"Arc", text:"Ball clears net then drops into kitchen" },
          { label:"Feet", text:"Stay behind kitchen line when volleying" },
          { label:"Mindset", text:"Patience — don't try to win with one dink" }
        ],
        mistakes: [
          "Stepping into kitchen while volleying = fault",
          "Momentum carries you into kitchen after volley = fault",
          "Paddle touches kitchen line on volley = fault",
          "Stepping into kitchen to let ball bounce = OK (not a fault)"
        ],
        youtube: [
          { title:"Beginner's Guide to Dinking in Pickleball", sub:"Full dink mechanics, touch, control", url:"https://www.youtube.com/watch?v=5-ty-cyg6sI" },
          { title:"The Non-Volley Zone (Kitchen) Rules", sub:"NVZ faults explained clearly for beginners", url:"https://www.youtube.com/watch?v=5sKMsK2C-fY" },
          { title:"Mastering the Soft Game: Dinks & Volleys", sub:"Touch shots and kitchen control drills", url:"https://www.youtube.com/watch?v=JCXWSDlDL38" }
        ]
      },
      {
        num: 5,
        title: "Volleys & Court Positioning", priority: "Every player uses a compact punch volley and understands that partners advance to the kitchen together.",
        subtitle: "Punch Volley · Net Position · Doubles Court Coverage",
        timeline: [
          { time:"0–8", icon:"🔥", label:"Split Step Warm-Up", type:"warmup", desc:"Practice the split step (small hop when opponent hits). React left/right. Foundation of all court movement" , guide: { setup: "Players along the baseline or in pairs.", steps: ["Coach explains: split step = small two-footed hop timed to when opponent contacts the ball. Land on both feet, knees bent, ready to move.", "Shadow drill: coach points left or right, players split step then move laterally. 10 reps each.", "Progress: coach says nothing, just moves their paddle. Players react to paddle movement.", "Court movement drill: baseline → kitchen line → baseline × 3, doing a split step at each line transition."], errors: [{mistake: "Hopping too late — after the ball is already in flight", fix: "\"Split when you see THEIR PADDLE move, not when the ball leaves. Earlier is always better.\""}
, {mistake: "Landing stiff-legged (heels hitting first)", fix: "\"Land on the balls of your feet — like you're sneaking. Soft landing = fast first step.\""}
], filler: "Mirror drill: face partner, 30 seconds. Partner shuffles laterally at random. You must mirror every movement. Builds lateral quickness and reading ability." }},
          { time:"8–20", icon:"📖", label:"Volley Mechanics", type:"skill", desc:"\"Punch\" motion — short compact swing. Paddle stays in front. No big backswing. Must be outside kitchen to volley" , guide: { setup: "All players standing facing coach. Shadow work first — no ball.", steps: ["Demo volley vs groundstroke: 'No bounce, compact punch motion, no backswing. NOT a swing — a punch.'", "Show the compact punch: elbow slightly bent, short forward motion, contact in front of body.", "Show what NOT to do: full backswing before volley. 'This gives your opponent time to react AND risks a fault.'", "Players shadow punch volley × 10 forehand, × 10 backhand — freeze at contact, check position.", "Key check: can you touch your shoulder with the paddle before hitting? If yes, the backswing is too big."], errors: [{mistake: "Full tennis-style swing before volleying", fix: "\"Touch your shoulder with the paddle — if you can do that during your backswing, you've gone too far.\""}
, {mistake: "Dropping the paddle head low before contact", fix: "\"Paddle stays up and in front. If your paddle tip drops below your wrist, you'll hit into the net.\""}
], filler: "Partner shadow: one player mimics being the ball (slow-mo swings from different heights). Other player shadow-punches at the same height. Locks in compact motion." }},
          { time:"20–35", icon:"🏓", label:"Punch Volley Drill", type:"drill", desc:"One at kitchen, partner feeds mid-court balls. Return with compact punch volleys, alternating FH and BH. 3 sets of 15" , guide: { setup: "Hitter at kitchen line, feeder at mid-court with 10 balls.", steps: ["Feeder tosses ball to hitter's forehand side at mid-height.", "Hitter: split step, compact punch volley — no backswing.", "Alternate forehand and backhand every 5 feeds.", "Set: 15 FH volleys, 15 BH volleys, then switch roles.", "Focus cue: 'Contact in front of your body — never let it get even with your shoulder.'"], progressions: [{label: "Foundation", desc: "Feeder tosses slow and directly to paddle side. Hitter focuses only on compact motion."}
, {label: "Build", desc: "Feeder varies height (low, mid, high). Hitter must adjust contact point."}
, {label: "Challenge", desc: "Feeder feeds to the body — hitter must move paddle to redirect or protect."}
], errors: [{mistake: "Punching downward on low volleys — ball goes into the net", fix: "\"Low volley: OPEN your paddle face. Aim through the TOP of the net tape, not at the net.\""}
, {mistake: "Ball getting even with or past the shoulder before contact", fix: "\"If it's beside your shoulder, you're late. Move your feet sooner — take one step toward the ball.\""}
], filler: "Speed volley: feeder rapid-fires soft balls, hitter must return every single one without a miss. Count consecutive. Personal best." }},
          { time:"35–50", icon:"🏓", label:"Doubles Positioning Drill", type:"drill", desc:"Both players move to kitchen together. \"Side by side at the kitchen\" = winning position. Walk through scenarios" , guide: { setup: "Teams of 2. Coach walks through the movement pattern on foot before adding any ball.", steps: ["Walk-through 1: both players start at the baseline. Simulate a return of serve, then BOTH advance to the kitchen line together.", "Rule: you arrive TOGETHER or not at all. One player at net, one at baseline = losing position.", "Drill with ball: serve → returner hits return deep → BOTH players advance → call 'Ready!' when both reach the kitchen.", "Once at kitchen: feeder hits a ball to either player. Both react, covering their own half.", "5 walk-throughs slow, then 5 at full speed."], progressions: [{label: "Foundation", desc: "No ball — walk the positioning pattern together. Understand the movement."}
, {label: "Build", desc: "Add a real serve and return. Advance to kitchen after the return."}
, {label: "Challenge", desc: "Full rally. Are both players staying at the kitchen line together? Coach calls out any split positioning."}
], errors: [{mistake: "One player charges to the kitchen while partner hangs back at baseline", fix: "\"You move together. If partner isn't moving, call their name: 'Come up!' Then move with them.\""}
, {mistake: "Players arriving at kitchen one at a time and getting passed", fix: "Show the vulnerability: feed ball to the gap when they're split. The visual lesson sticks."}
], filler: "Sticky feet drill: once both players are at the kitchen, they can only reach and lean — no stepping back. Forces kitchen dominance and short punch volleys." }},
          { time:"50–60", icon:"🎮", label:"Volley vs Dinker Game", type:"game", desc:"Two volleyers vs. two dinkers. Rotate every 5 points. Teaches both attack and defense at the kitchen" , guide: { setup: "2 volleyers at the kitchen line on one side. 2 dinkers at the opposite baseline. Dinkers feed to start each rally.", steps: ["Dinkers win by keeping the ball in play and dinking patiently until volleyers miss or pop it up.", "Volleyers win by putting away dinks with clean punch volleys.", "If volleyers win 3 points, teams rotate: dinkers become volleyers.", "Coach watches: are volleyers punching or swinging? Are dinkers staying patient?"], progressions: [{label: "Foundation", desc: "Volleyers focus on clean compact punch — no power, just placement."}
, {label: "Build", desc: "Volleyers aim volleys at feet of the dinkers — introduce the 'aim at feet' concept."}
, {label: "Challenge", desc: "Dinkers can speed up ONE ball per rally. Volleyers must deal with the mix."}
], errors: [{mistake: "Volleyers retreating from the kitchen line when the ball comes hard", fix: "\"Stay at the line. A hard ball at you is easier to punch back from close range than from mid-court.\""}
], filler: "Call-out drill: volleyers must say 'punch!' every time they volley. If they don't call it, the point goes to the dinkers. Builds conscious compact motion." }}
        ],
        objectives: [
          "Execute a compact punch volley without large backswing",
          "Understand that kitchen line is the best net position",
          "Move in tandem with partner toward the kitchen",
          "Use the split step to react quickly to shots"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cones for positioning markers"],
        coachTip: "The kitchen line is 'home base.' Players who get to the net and stay there win most points at beginner level. Drill the habit of moving UP after the return of serve.",
        cues: [
          { label:"\"Punch not swing\"", text:"Short forward motion only" },
          { label:"Paddle position", text:"In front of body at all times" },
          { label:"Contact", text:"Ball at or above net height when possible" },
          { label:"Step", text:"Into the volley with front foot for added power" }
        ],
        youtube: [
          { title:"How to Volley in Pickleball", sub:"Punch volley mechanics for beginners", url:"https://www.youtube.com/watch?v=iQSUTRHsP6c" },
          { title:"How to Punch Volley Like a Pro", sub:"Compact punch volley mechanics at the kitchen line", url:"https://www.youtube.com/watch?v=DNzuSOzk2wY" },
          { title:"Punch & Block Volley: Ready Position", sub:"Pickleball Kitchen", url:"https://www.youtube.com/watch?v=ll_Jl6mlWwU" }
        ]
      },
      {
        num: 6,
        title: "Scoring & Game Strategy", priority: "Every player can call the three-number score correctly before serving.", complexity: true,
        subtitle: "3-Number Scoring · Rally Tactics · Communication in Doubles",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Warm-Up Rally", type:"warmup", desc:"Free rally using all court zones — try to use FH, BH, dink, and volley in each rally" , guide: { setup: "Pairs anywhere on court. Free rally using all court zones.", steps: ["Goal: use at least 4 different shot types in one rally — FH, BH, dink, volley.", "Coach calls 'Switch!' randomly — players must immediately change shot selection.", "Gets all skills from Sessions 1–5 active before the tactics session begins."], errors: [{mistake: "Players defaulting to only groundstrokes", fix: "Call: 'I need to see a dink in the next 5 shots.' Specific prompts force variety."}
], filler: "Skill tally: pairs count how many DIFFERENT shot types they use in a single rally. Beat 4 different types = bonus round." }},
          { time:"10–22", icon:"📊", label:"Scoring Deep Dive", type:"skill", desc:"3-number format: Server – Receiver – Server#. Call before every serve. Walk through common scenarios. First serve = \"0-0-2\"" , guide: { setup: "Players standing or seated. Whiteboard or verbal walk-through.", steps: ["Write or say: '0-0-2. This is how every pickleball game starts. Say it together three times.'", "Explain the three numbers: my score — their score — my server number.", "Server number rule: right side of court = server 1, left side = server 2. Simple.", "Walk through 2 service rotations only. Players say the score out loud each time — don't move on until they can say it.", "Repeat the mantra together: 'My score. Their score. My number.' Done."], errors: [{mistake: "Forgetting the server number", fix: "Mnemonic: look at which side of the court you're on. Right side = 1, left side = 2. Simple."}
, {mistake: "Assuming 0-0-1 starts the game (it's 0-0-2)", fix: "\"The first team only gets ONE server at the start — that's why it's 0-0-2. After that, all subsequent serves use 1 and 2 normally.\""}
], filler: "Score quiz: 'The score is 5-3-2. This team scores. What's the new score?' (Answer: 6-3-2.) Fast back-and-forth, players answer before you confirm. 5 rapid scenarios." }},
          { time:"22–35", icon:"🏓", label:"Scoring Practice Game", type:"game", desc:"Short games to 7. Coach observes and corrects score-calling errors. Score must be called before every serve" , guide: { setup: "Full court games to 7. Before every serve, server MUST call the score.", steps: ["Coach circulates and STOPS the game immediately if the score is called wrong or not called at all.", "Every player calls their own score — no delegating to partner.", "After each game: 'At what point did you get confused with the score?'"], progressions: [{label: "Foundation", desc: "Stop after every point, say the score together before the next serve."}
, {label: "Build", desc: "Full flow — score must be called, but game isn't stopped unless it's wrong."}
, {label: "Challenge", desc: "Coach randomly asks 'what's the score?' mid-rally. Players must answer immediately."}
], errors: [{mistake: "Player calls score but gets the numbers backward", fix: "\"Always: MY score first, THEIR score second, MY number third. Lock in that order.\""}
], filler: "Score detective: before calling the score, player whispers it to coach. Coach confirms. Then they call it publicly. Builds confidence." }},
          { time:"35–48", icon:"🧠", label:"Strategy Discussion", type:"skill", desc:"Two rules only: (1) Return deep, then rush the net. (2) Get to the kitchen together. Rules 3–4 are covered in Level 2." , guide: { setup: "Players gathered. Coach at the net or whiteboard. Hold for 5 minutes before applying in play.", steps: ["Two rules only today — keep it that simple.", "Rule 1: RETURN DEEP, THEN RUSH. 'Hit the return, then sprint. Don't stand and watch it land.'", "Rule 2: GET TO THE KITCHEN. 'Return → run → kitchen.' Drill this phrase until they say it back to you.", "Demo: play out a point showing both rules. Players call 'Rush!' the moment you advance.", "Note: serve placement and aiming at feet are Level 2. Don't introduce them today."], errors: [{mistake: "Players returning deep then standing at baseline", fix: "\"The return is an attack, not a defensive shot. Return → run. Every single time.\""}
, {mistake: "Players standing at the kitchen but not at the kitchen LINE", fix: "Point to the line itself: 'This is home. Your toes should almost be on this line.'"}
], filler: "Two-rule challenge: after each rally, teams call out which of the two rules they applied. Gets them articulating the strategy out loud." }},
          { time:"48–60", icon:"🎮", label:"Strategy Game (to 11)", type:"game", desc:"Full game applying all strategies. Debrief: what worked? What didn't?" , guide: { setup: "Full games to 11. No interruptions — just apply what they know.", steps: ["After each point, quick team debrief: 'Which rule did we just not follow?'", "Coach interjects once per game max — brief, specific, then let play continue.", "Final 5 minutes: pure freeplay. No coaching. Let them execute independently."], progressions: [{label: "Foundation", desc: "Focus on one rule only per game (coach assigns which one)."}
, {label: "Build", desc: "All 4 rules are in play. Coach calls out which rule applied after each point."}
, {label: "Challenge", desc: "Bonus point if the team successfully applies all 4 rules visibly in a single rally."}
], errors: [{mistake: "Players forget rules in the heat of competition", fix: "Acceptable at this stage. Note which rules got dropped most — revisit in the debrief."}
], filler: "Rush race: first team to successfully return deep AND reach the kitchen on 3 consecutive serves wins a bonus point." }}
        ],
        objectives: [
          "Call the score correctly using 3-number format",
          "Understand serve rotation in doubles",
          "Apply 2 strategies during gameplay",
          "Communicate effectively with a doubles partner"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Scorecard"],
        coachTip: "Pickleball scoring confuses almost everyone at first. Use the mantra: \"My score, their score, my number.\" Have students repeat it out loud before EVERY serve until it becomes automatic.",
        cues: [
          { label:"Format", text:"[My score] – [Their score] – [Server #]" },
          { label:"Scoring", text:"Only serving team can score a point" },
          { label:"Game", text:"Play to 11, win by 2" },
          { label:"Start", text:"Every game always starts with: \"0–0–2\"" }
        ],
        youtube: [
          { title:"Pickleball Scoring Explained Simply", sub:"3-number scoring walkthrough for beginners", url:"https://www.youtube.com/watch?v=W1ruimc369Y" },
          { title:"Pickleball Strategy for Beginners", sub:"Serve deep, rush net, basic tactics", url:"https://www.youtube.com/watch?v=OxNnewWzUC4" },
          { title:"Pickleball Rules, Scoring & Court Conduct", sub:"Pickleball Kitchen", url:"https://www.youtube.com/watch?v=pU_wzWOzGoY" }
        ]
      },
      {
        num: 7,
        title: "Putting It All Together", priority: "Every player attempts at least one 3rd shot drop during live play; recognition matters more than execution.", complexity: true,
        subtitle: "3rd Shot Drop · Transition Zone · Full Rally Sequences",
        timeline: [
          { time:"0–8", icon:"🔥", label:"Skills Circuit Warm-Up", type:"warmup", desc:"3 stations × 2 min: serve, dink rally, volley wall. Activates all skills learned so far" , guide: { setup: "3 stations, 2 minutes each. Players rotate on coach's signal.", steps: ["Station 1 (Baseline): 5 serves each — legal + aimed at back half of service box.", "Station 2 (Kitchen line): Dink rally with partner. Count and call the streak.", "Station 3 (Mid-court): Coach or designated feeder sends mid-court balls. Players punch volley back.", "Rotate on whistle every 2 minutes."], errors: [{mistake: "Players chatting and not working at stations", fix: "Give each station a specific success target to focus them: 'I want to see 10 dinks before I call time.'"}
], filler: "Record the best dink streak at Station 2. Post it and try to beat it next session." }},
          { time:"8–22", icon:"📖", label:"The 3rd Shot Drop", type:"skill", desc:"First exposure to the 3rd shot drop. Show why it exists by demoing the problem (drive into net players) vs the fix (soft drop). Feel over perfection today." , guide: { setup: "Coach demos from baseline. Players watch and observe the arc and landing zone.", steps: ["Diagram: Serve (you) → Return (them, they rush net) → 3rd shot (you). Draw or walk on court.", "Why drop? Opponent returned and is at the kitchen. A hard drive = easy put-away for them. A drop = neutralises their net advantage.", "Show good drop: soft arc, clears net by 6–12 inches, lands softly in the kitchen.", "Show bad drop: too high and lands long = they smash it. Show the mistake deliberately.", "Key feel: the 3rd shot drop should feel like you barely swung at all. It's feel, not force."], errors: [{mistake: "Player tries to drop but hits it too hard — lands past the kitchen", fix: "\"Loosen your grip to a 3/10. The drop should feel almost effortless. You're guiding, not hitting.\""}
, {mistake: "Player drops but then freezes and watches — doesn't advance", fix: "\"Your feet should start moving the MOMENT you hit the drop. Drop and move. They go together.\""}
], filler: "Show a short YouTube clip of a 3rd shot drop sequence (linked in the app) so players see real-game pace." }},
          { time:"22–38", icon:"🏓", label:"3rd Shot Drop Drill", type:"drill", desc:"One at kitchen feeds return, one at baseline hits drops. Land in kitchen. Goal: 25 good drops. The most impactful beginner skill" , guide: { setup: "Feeder at kitchen line. Hitter at baseline. FEEDER CATCHES — does not return. This isolates the drop mechanics.", steps: ["Feeder tosses a deep 'return' from the kitchen line to the hitter at baseline.", "Hitter focuses on ONE thing: making soft contact. Loosen the grip. Barely swing.", "Feeder catches anything that lands in the kitchen — calls 'Kitchen!' or 'Long!' or 'Net!' as feedback.", "Target: 8 out of 25 landing in the kitchen. This is first exposure — that's a win.", "After every 5 drops, coach gives a single adjustment cue. Don't overwhelm with feedback.", "Switch roles after 25 drops. Both players drop, both players learn."], progressions: [{label: "Foundation", desc: "Stationary at baseline. No movement at all. Focus entirely on arc and landing zone."}
, {label: "Build", desc: "After each drop, take 1–2 steps toward kitchen to start the advance habit."}
, {label: "Challenge", desc: "Feeder positions left or right of centre. Hitter must adjust aim based on feeder's position."}
], errors: [{mistake: "Too much power — ball sails past the kitchen", fix: "\"Cut your backswing in half. The 3rd shot drop lives in your wrist and fingers, not your arm.\""}
, {mistake: "Ball goes into the net", fix: "\"Get UNDER the ball. Contact it lower, open paddle face, follow-through upward. Think 'scoop.'\""}
], filler: "Pressure set: 10 drops, must land 7/10 in the kitchen. Track across 3 sets. Builds consistency under a specific target." }},
          { time:"38–50", icon:"🏓", label:"Full Sequence Drill", type:"drill", desc:"Optional extension: serve → return → drop attempt → advance. Walk-through pace only — skip if the group is still finding the drop." , guide: { setup: "Full court. Server (A) at baseline, server's partner (B) at baseline. Returner team at opposite side.", steps: ["Walk-through only — no live pace until the group shows they understand the sequence.", "A serves → returner returns → A ATTEMPTS a drop (any landing is fine) → A takes 2 steps toward kitchen.", "Say out loud as a group: 'Serve → return → drop → move.' Repeat the phrase.", "Play a few slow-motion points. Don't correct the drop outcome — just reinforce the sequence.", "If a group is clearly ready: play at half speed. Otherwise keep it as a walk-through only."], progressions: [{label: "Foundation", desc: "Walk through slow — serve, mime return, mime drop, walk to kitchen. No pace."}
, {label: "Build", desc: "Half speed with real serve. 3rd shot drop required on every serving turn."}
, {label: "Challenge", desc: "Full speed. Returner team tries to pressure the 3rd shot — no free passes."}
], errors: [{mistake: "Hitter drops then stops and watches — doesn't advance", fix: "\"DROP AND MOVE. Say it out loud as you drill it. Hit → take a step → keep moving → kitchen.\""}
, {mistake: "Drop lands too high and gets attacked", fix: "\"The drop should die in the kitchen. If it's bouncing at shoulder height, it's too hard — slow down.\""}
], filler: "Slow-motion replay: after a sequence, freeze at the moment of the drop. Coach points to where it landed and asks the group: kitchen, long, or net? Builds reading ability." }},
          { time:"50–60", icon:"🎮", label:"Full Scored Game (to 11)", type:"game", desc:"Apply everything learned. Bonus challenge: attempt 3rd shot drop on every serving point" , guide: { setup: "Standard games to 11. Score called correctly before every serve.", steps: ["Bonus rule: if server ATTEMPTS a 3rd shot drop on the serving turn (regardless of outcome), and wins the rally, they earn an extra point.", "No drive allowed on the 3rd shot — coach can call it if they see it.", "After each game: 'How many times did you attempt the drop?'"], progressions: [{label: "Foundation", desc: "Just play normally with correct scoring — apply skills naturally."}
, {label: "Build", desc: "Server MUST attempt 3rd shot drop. No drives allowed on 3rd shot."}
, {label: "Challenge", desc: "Tracking challenge: keep count of 3rd shot drops attempted vs. successful. Share at debrief."}
], errors: [{mistake: "Players abandoning strategy when score is close", fix: "Normal — note it for the debrief. Mention: 'This is exactly why we train strategy drills.'"}
], filler: "Drop debrief: coach asks 3 players — 'What did you notice about the drop? Hard to do? What made it easier?' Normalises difficulty." }}
        ],
        objectives: [
          "Understand the purpose and mechanics of the 3rd shot drop",
          "Execute the serve → return → drop sequence in practice",
          "Navigate the transition zone (midcourt) safely",
          "Play a complete game applying all skills learned"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cones (kitchen target)"],
        coachTip: "The 3rd shot drop is the single most game-changing skill for beginner-to-intermediate players. Even getting students to attempt it regularly is a huge win at this level.",
        cues: [
          { label:"Shot 1", text:"Serve deep to back corner" },
          { label:"Shot 2", text:"Return deep, rush to kitchen line" },
          { label:"Shot 3", text:"Drop into kitchen (server advances to net)" },
          { label:"Shot 4+", text:"Dink rally or attack high balls" }
        ],
        youtube: [
          { title:"Mastering the 3rd Shot Drop", sub:"Step-by-step mechanics and drills", url:"https://www.youtube.com/watch?v=Cw6Iz0nS0ds" },
          { title:"Transition Zone — Don't Get Stuck in No-Man's Land", sub:"Moving through midcourt safely", url:"https://www.youtube.com/watch?v=zRuuKWiAsZI" },
          { title:"Serve, Return & 3rd Shot Explained", sub:"How to move through the beginner rally sequence", url:"https://www.youtube.com/watch?v=tHL40SO-xU4" }
        ]
      },
      {
        num: 8,
        title: "Game Day & Graduation 🎓", priority: "Every player completes a full point in a match setting with correct score-calling.",
        subtitle: "Round-Robin Tournament · Skills Assessment · Certificate & What's Next",
        timeline: [
          { time:"0–8", icon:"🔥", label:"Celebration Warm-Up", type:"warmup", desc:"Recap all 7 sessions in 7 minutes: grip check, 3 serves, dink rally, volley, score call" , guide: { setup: "High energy. Music if possible. 7 stations, 1 minute each.", steps: ["Min 1: Grip check — show Eastern grip on command.", "Min 2: 3 legal serves each.", "Min 3: 10-dink rally with partner.", "Min 4: 3 punch volleys (coach feeds).", "Min 5: Call the score 3 times correctly.", "Min 6: Attempt one 3rd shot drop.", "Min 7: Mini rally — apply everything."], filler: "Coach gives one specific compliment per player during warm-up: something specific they've improved since Session 1." }},
          { time:"8–45", icon:"🏆", label:"Mini Round-Robin Tournament", type:"game", desc:"Groups of 4. Each pair plays all others (games to 7). Coach tracks scores. Focus: enjoy the game and apply all skills" , guide: { setup: "Groups of 4 (2v2). Each pair plays all other pairs. Games to 7, time-capped at 8 minutes each.", steps: ["Post bracket on whiteboard or announce schedule clearly.", "Track scores on a tally sheet.", "Coach observes across all games — looking for: score calling, 3rd shot attempts, kitchen positioning, partner communication.", "Between games: 2-minute break. Coach gives ONE targeted observation per team: 'I noticed your returns were short — push them deeper.'", "Final game: coach watches without any coaching — let them play."], filler: "Fun awards: Most Patient Dinker, Best Score Caller, Best 3rd Shot Drop, Most Improved from Session 1. Announce at graduation." }},
          { time:"45–55", icon:"📋", label:"Skills Assessment", type:"skill", desc:"Serve, dink, volley demonstration. Individual feedback from coach. Rubric: Needs Work / Developing / Consistent" , guide: { setup: "Each player completes assessment in sequence. Coach uses a simple rubric: Needs Work / Developing / Consistent.", steps: ["SERVE: player serves 10 times. Coach counts legal serves in the correct diagonal service box (target: 6/10).", "GROUNDSTROKE: pairs rally baseline-to-baseline. Coach counts consecutive shots (target: 8+).", "DINK: both at kitchen line. Coach counts consecutive dinks (target: 10).", "VOLLEY: coach feeds 5 mid-height balls. Player punch volleys. Coach checks for no backswing (target: 5 clean).", "SCORING: player calls the score correctly 3 times in a row during a short practice rally."], errors: [{mistake: "Player panics during assessment", fix: "Remind: 'This is just to see where you are — it's not a test you can fail. Just show me what you've been doing.'"}
], filler: "For players who need extra time: partner can feed while coach checks. No one gets skipped." }},
          { time:"55–60", icon:"🎓", label:"Graduation & What's Next", type:"cool", desc:"Certificate of completion. Info on EA Pickleball leagues, open play, and Level 2 course" , guide: { setup: "Circle or semicircle. Certificates in hand.", steps: ["Distribute certificates — make it feel like a moment.", "Coach delivers ONE specific personal highlight to each player (prepare these during the tournament).", "Group photo.", "Hand out Level 2 info card or EA Pickleball league signup sheet.", "Go-around: each player shares the one skill they're most proud of from this program."], filler: "Challenge: before leaving, each player must show a coach one skill from the graduation checklist — their choice. Small, positive, reinforcing." }}
        ],
        objectives: [
          "Complete a round-robin tournament with correct scoring",
          "Demonstrate all core Level 1 skills in assessment",
          "Receive individual coach feedback",
          "Understand progression path to Level 2"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Score sheets","Certificates"],
        coachTip: "This is a celebration session. Keep energy high, recognize individual growth, not just skill level. Every player should leave feeling proud of their progress.",
        assessment: [
          { skill:"Serve", target:"6/10 legal serves in correct diagonal box" },
          { skill:"Groundstroke", target:"Rally 8+ shots with partner" },
          { skill:"Dink", target:"10-consecutive dink rally at kitchen line" },
          { skill:"Volley", target:"5 punch volleys without large backswing" },
          { skill:"Scoring", target:"Call correct 3-number score 3 times in a row" }
        ],
        youtube: [
          { title:"PrimeTime Pickleball", sub:"Best beginner-to-intermediate channel overall", url:"https://www.youtube.com/@PrimeTimePickleball" },
          { title:"Coach Briones", sub:"Step-by-step technique for all skill levels", url:"https://www.youtube.com/@CoachBriones" },
          { title:"Better Pickleball", sub:"Great for players 50+, excellent fundamentals", url:"https://www.youtube.com/@BetterPickleball" }
        ]
      }
    ]
  },
  2: {
    name: "Level 2 — Intermediate",
    duration: "90 min",
    skill: "3.0→3.5",
    drills: "24+",
    colorClass: "l2",
    sessions: [
      {
        num: 1,
        priority: "Every player sustains a 10-shot cross-court dink rally and recognizes the speed-up trigger — high ball, not every ball.",
        title: "Dinking Mastery",
        subtitle: "Cross-court Dinking · Speed-up Attacks · Dink Patterns",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Kitchen Line Warm-Up", type:"warmup", desc:"Straight dink rally with partner. Focus: soft hands, paddle face angle, footwork reset between shots" },
          { time:"10–25", icon:"📖", label:"Cross-Court Dinking", type:"skill", desc:"Demo cross-court angle geometry. Wider angle = harder to attack. Goal: keep opponent pinned to their sideline corner", guide: {
    setup: "Pairs at kitchen line on opposite sides of net, both in AD court corner. Coach demos the cross-court angle — wide ball is harder to speed up than a straight ball.",
    steps: ["Both players start in ready position at kitchen line","Player A initiates a soft cross-court dink to Player B's backhand corner","Player B returns cross-court — keep the ball low and angled wide","Sustain 10+ shot rally; if ball floats up, reset — don't attack yet","Switch sides after 5 minutes"],
    progressions: [
      { label: "Foundation", desc: "10-shot rally, any pace, focus on cross-court direction only" },
      { label: "Build", desc: "Keep ball below net height on every shot — no floaters" },
      { label: "Challenge", desc: "Call the shot out loud: 'wide' (angled wide) or 'body' (at opponent hip) before hitting" }
    ],
    errors: [
      { mistake: "Dinking too high — ball pops up into attack zone", fix: "\"Aim at the tape — if it clips the tape and falls in, that's your target height.\"" },
      { mistake: "Standing too close to the kitchen line — off-balance on wide balls", fix: "\"Heels on the line, toes forward. That's your anchor point.\"" }
    ],
    filler: "If time: 'Dink Golf' — count how many dinks to land in a hula hoop placed in the opponent's kitchen corner. Par is 3."
  }},
          { time:"25–45", icon:"🏓", label:"Cross-Court Pattern Drill", type:"drill", desc:"Pairs drill: Player A dinks cross-court, Player B returns cross-court back. 3 minutes, then switch sides. Track consecutive rally count", guide: {
    setup: "Pairs at kitchen, both in AD court. Coach sets 3-minute rounds with a rotation signal. Target: AD-corner hula hoop or cone.",
    steps: ["Player A dinks cross-court continuously — all balls to backhand corner","Player B returns cross-court every time — no forehand redirects yet","Count consecutive shots without error. Target: 15+","After 3 min: A redirects one ball down-the-line to end the pattern — B resets"],
    progressions: [
      { label: "Foundation", desc: "Player A feeds, Player B just returns cross-court — one ball in play" },
      { label: "Build", desc: "Both players maintain the pattern cooperatively for 15+ shots" },
      { label: "Challenge", desc: "Add a cone target — must land within 1m of the sideline corner" }
    ],
    errors: [
      { mistake: "Player B redirecting cross-court into middle — lazy aim", fix: "\"Pick a spot on the sideline and aim there every single shot.\"" },
      { mistake: "Pattern breaks when pace picks up", fix: "\"Slow it down. Pattern beats pace every time in dinking.\"" }
    ],
    filler: "If time: competitive version — first pair to 20 consecutive cross-court dinks wins."
  }},
          { time:"45–55", icon:"📖", label:"The Speed-Up Attack", type:"skill", desc:"When to speed up: high ball, slow dink, opponent off balance. Target: shoulder or hip of non-paddle hand", guide: {
    setup: "Players at kitchen line. Coach demos the speed-up trigger: dink floats above net height → attack. Emphasize this is a reaction skill, not an aggression skill.",
    steps: ["Player A dinks cooperatively","Player B watches ball height — waiting for a float above net tape","When float appears: compact backswing, contact in front, drive angle down","Follow through low — don't swing up","If blocked: reset, don't panic drive"],
    progressions: [
      { label: "Foundation", desc: "Coach tosses a mix of low balls and floats — player calls 'attack' or 'dink' before hitting" },
      { label: "Build", desc: "Live dinking — player speeds up only on true floaters (coach confirms)" },
      { label: "Challenge", desc: "Speed-up to a specific target zone (crosscourt sideline or body)" }
    ],
    errors: [
      { mistake: "Attacking balls below net height — weak pop-up", fix: "\"If you have to swing up to hit it, it's a dink ball not an attack ball.\"" },
      { mistake: "Looping swing with too much backswing", fix: "\"Compact. Elbow stays in. It's a punch, not a swing.\"" }
    ],
    filler: "If time: 'Float or Dink' — coach tosses randomly, player calls out before contacting."
  }},
          { time:"55–70", icon:"🏓", label:"Speed-Up Trigger Drill", type:"drill", desc:"Feeder at net drops high dinks at varying heights. Player decides: dink back or speed up. Builds decision-making under pressure", guide: {
    setup: "Pairs at kitchen. Player A dinks at varying heights — some low (dink), some floating (attack-able). Player B must read and react.",
    steps: ["Player A dinks at controlled pace, mixing heights intentionally","Player B watches the paddle face at contact — early read on height","On a float: compact speed-up cross-court or at body","On a low ball: continue dinking — no false attacks","Coach counts: how many correct reads in 10 balls?"],
    progressions: [
      { label: "Foundation", desc: "A announces 'float' or 'low' before hitting — B reacts with correct response" },
      { label: "Build", desc: "No announcement — B must read independently. Target: 7/10 correct reads" },
      { label: "Challenge", desc: "B calls the target (cross-court, body, down-the-line) before speeding up" }
    ],
    errors: [
      { mistake: "Speeding up on a low ball — hitting net", fix: "\"If you hit the net, the ball was too low to attack. Wait for the float.\"" },
      { mistake: "Hesitating too long after a float — moment passes", fix: "\"Decision time is contact time. If you see it, hit it.\"" }
    ],
    filler: "If time: 20-ball speed-up trigger test. Coach records score — players try to beat their own score."
  }},
          { time:"70–85", icon:"🤝", label:"Social Play — Dink Focus Games", type:"social", desc:"Games to 11. Bonus point awarded for any rally of 10+ dinks before the point ends", guide: {
    setup: "Games to 11. Two courts. Rule: speed-ups are only legal on balls that bounce above waist height. All other attacks must be dinks. Coach enforces.",
    steps: ["Play normal points with the dink-focus rule","If a player speeds up on a low ball: point goes to opponent","Coach calls attention to good speed-up reads — 'That's a trigger ball!'","Switch partners every game"],
    progressions: [
      { label: "Foundation", desc: "Relax the rule — just encourage dinking, don't penalize attacks" },
      { label: "Build", desc: "Standard dink-focus rule: speed-ups on floats only" },
      { label: "Challenge", desc: "Dink-only rally — first team to successfully speed up AND win the point earns a bonus point" }
    ],
    errors: [
      { mistake: "Players reverting to baseline bashing to avoid dinking", fix: "\"Kitchen line or nothing — no retreating from the kitchen during social play today.\"" },
      { mistake: "Speed-up attempts going wide or long — overaggression", fix: "\"Speed-up to the body first. It's the highest-percentage attack.\"" }
    ],
    filler: "If time: 'King of the Dink' — players rotate off when they hit a ball above waist height without a speed-up opportunity."
  }},
          { time:"85–90", icon:"💬", label:"Group Debrief", type:"cool", desc:"What surprised you about the cross-court angle? When did you choose to speed up vs dink?" }
        ],
        objectives: [
          "Execute consistent cross-court dink rallies using proper angle geometry",
          "Identify when to attack with a speed-up vs. continue dinking",
          "Build patience and comfort in extended kitchen rallies",
          "Develop a default dink pattern that creates offensive opportunities"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cone markers"],
        coachTip: "Level 2 players often rush out of the dink rally too soon. Emphasize that the player who speeds up at the right moment wins, not the player who speeds up the most. Patience is the skill.",
        cues: [
          { label:"Contact point", text:"Below net height — hit up and over" },
          { label:"Paddle face", text:"Slightly open, soft grip (4/10 tension)" },
          { label:"Feet", text:"Reset after every shot, never reach" },
          { label:"Target zone", text:"Opponents' feet at the kitchen line" },
          { label:"Speed-up trigger", text:"Ball above net height with room to swing" }
        ],
        youtube: [
          { title:"Cross-Court Dink — Myth Busted", sub:"In2Pickle", url:"https://www.youtube.com/watch?v=QKC5EL91muY" },
          { title:"To Speed Up or Not at the Kitchen", sub:"In2Pickle", url:"https://www.youtube.com/watch?v=MIaovQGWwmA" },
          { title:"Dinking Drills for 3.0–3.5 Players", sub:"Structured kitchen drills for improvement", url:"https://www.youtube.com/watch?v=5-ty-cyg6sI" }
        ]
      },
      {
        num: 2,
        priority: "Every player drops at least 5 balls into the kitchen and can soft-reset a hard drive back into a dink.",
        title: "3rd Shot Drop & Resets",
        subtitle: "Consistent 3rd Shot Drop · Reset from Pressure · Transition Zone",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Baseline Rally Warm-Up", type:"warmup", desc:"Groundstroke rally from baseline. Focus: footwork, ready position, consistent contact" },
          { time:"10–25", icon:"📖", label:"3rd Shot Drop Mechanics", type:"skill", desc:"Revisit from Level 1 but deeper: paddle angle, backswing length, follow-through direction. Target: land in kitchen, not just 'short'", guide: {
    setup: "Coach at net tosses from kitchen side. Players at baseline. Emphasize the 'feel' of the drop — soft hands, continental or eastern grip, forward motion only.",
    steps: ["Start position: baseline, ready stance","Step in and forward — weight transfer is key","Contact ball in front at knee height or below","Soft grip (4/10 pressure), open paddle face at 45°","Aim for the kitchen — arc over the net with no pace","Hold the follow-through — don't decelerate at contact"],
    progressions: [
      { label: "Foundation", desc: "Coach hand-tosses from 5 feet away — player drops into the kitchen, no opponents" },
      { label: "Build", desc: "Live feed from baseline to baseline — player hits 3rd shot drop after bounce" },
      { label: "Challenge", desc: "Full rally: serve, return, drop into kitchen — player rushes to kitchen on landing drop" }
    ],
    errors: [
      { mistake: "Arm decelerates at contact — ball goes into net", fix: "\"Keep moving through the ball. Deceleration kills the drop.\"" },
      { mistake: "Too much pace — ball sails long or pops up for attack", fix: "\"Relax your grip. The arc does the work, not the swing.\"" }
    ],
    filler: "If time: drop-shot closest to the kitchen line wins. Players take turns — no pace, just placement."
  }},
          { time:"25–45", icon:"🏓", label:"3rd Shot Consistency Drill", type:"drill", desc:"One player serves and drops, partner catches (doesn't hit). Coach evaluates arc and landing zone. Goal: 15/20 in kitchen", guide: {
    setup: "3 players: server at baseline, returner at baseline, catcher at kitchen. Catcher catches drops — no volleys yet. Focus: does the ball land in the kitchen?",
    steps: ["Server serves","Returner returns deep to server's backhand","Server hits 3rd shot drop toward kitchen","Catcher calls 'in' or 'out' and catches the ball","Rotate after 10 drops. Target: 6/10 in the kitchen"],
    progressions: [
      { label: "Foundation", desc: "Returner feeds a soft easy ball for the drop — remove serve variable" },
      { label: "Build", desc: "Full serve → return → drop sequence. Target: 5/10 in kitchen" },
      { label: "Challenge", desc: "Catcher tries to volley drops — can they reach it? If not, it's good" }
    ],
    errors: [
      { mistake: "Dropping from too far back — not enough arc to clear net", fix: "\"Take 2 steps in before dropping. Don't drop from the fence.\"" },
      { mistake: "Ball lands too close to kitchen line — barely in or out", fix: "\"Aim for the middle of the kitchen. The line will take care of itself.\"" }
    ],
    filler: "If time: 'Drop Scoring' — 3pts for past the halfway line, 2pts if in kitchen, 0pts if long. See who gets 15 pts first."
  }},
          { time:"45–55", icon:"📖", label:"The Reset — Neutralizing Pressure", type:"skill", desc:"When attacked, take pace off the ball and place it in the kitchen. Reset = dink from a defensive position. Soft hands under pressure", guide: {
    setup: "Coach explains 'reset' vs 'attack': when opponent hits hard at you, reset neutralizes — don't try to out-speed them. Demo a hard drive absorbed into a soft dink.",
    steps: ["Opponent drives hard — take early contact in front of body","Soft hands: grip relaxes at impact (let the ball deaden on the paddle)","Paddle face slightly open, push gently toward kitchen","Ball lands short of kitchen line — that's a reset, not a winner","Partner returns with a dink — you're back in the rally"],
    progressions: [
      { label: "Foundation", desc: "Coach hand-feeds hard drives — player practices absorbing without counter-attacking" },
      { label: "Build", desc: "Partner hits medium-pace drives, player resets to kitchen, continue dinking" },
      { label: "Challenge", desc: "Partner hits hard drives from transition zone — player must reset 3 consecutive before earning a speed-up" }
    ],
    errors: [
      { mistake: "Tight grip — ball pops up off paddle", fix: "\"Loosen your grip right at contact. Let the ball bury into the paddle face.\"" },
      { mistake: "Swinging at the hard ball — double-speed error", fix: "\"Don't swing. Block. Your arm barely moves on a reset.\"" }
    ],
    filler: "If time: 'Reset King' — player must reset 5 consecutive hard drives before they can attack. Coach counts."
  }},
          { time:"55–70", icon:"🏓", label:"Pressure Reset Drill", type:"drill", desc:"Feeder attacks with hard shots from mid-court. Receiver practices resetting into the kitchen. Progress: slow → medium → fast pace", guide: {
    setup: "Pairs at kitchen. Player A drives hard 3 consecutive balls. Player B resets all 3 to the kitchen. Then switch.",
    steps: ["Player A starts in transition zone and drives at Player B's body or shoulder","Player B absorbs: soft hands, open face, short block to kitchen","A must hit all 3 to the same spot — B can anticipate","After 3 successful resets: switch roles","Target: 4/5 resets landing in the kitchen"],
    progressions: [
      { label: "Foundation", desc: "A drives at 50% pace from kitchen line — easy to reset" },
      { label: "Build", desc: "A drives at 75% from transition zone — realistic rally pressure" },
      { label: "Challenge", desc: "A drives at varying targets (body, wide, low) — B must read and reset each one" }
    ],
    errors: [
      { mistake: "Reset going too wide or long", fix: "\"Aim reset to the center of the kitchen — margin for error. Sideline resets go out.\"" },
      { mistake: "Body flinching at hard drive — pulling head out", fix: "\"Eyes on the ball, not the opponent. Brace your core.\"" }
    ],
    filler: "If time: 'Attack-Reset-Attack' chain — A drives, B resets, A re-drives, B re-resets, A finishes. Longest chain wins."
  }},
          { time:"70–85", icon:"🤝", label:"Social Play — 3rd Shot Challenge", type:"social", desc:"Games to 11. Server must attempt a 3rd shot drop every point. Builds in-game application of the skill", guide: {
    setup: "Games to 11. House rule: the 3rd shot MUST be a drop or soft shot (no drives). Serving team gets a bonus point if their 3rd shot lands in the kitchen.",
    steps: ["Play normal points with mandatory 3rd shot drop rule","Any 3rd shot drive = lose the point","Kitchen landing = bonus point tracked on scoreboard","Rotate every game — coach observes 3rd shots"],
    progressions: [
      { label: "Foundation", desc: "Mandate the drop rule only — no bonus point tracking yet" },
      { label: "Build", desc: "Add bonus point for kitchen landing" },
      { label: "Challenge", desc: "Bonus point only if drop lands past the NVZ centerline (deeper in kitchen)" }
    ],
    errors: [
      { mistake: "Players force the drop on bad returns — shanked drops into net", fix: "\"If the return is at your shoulder, skip the drop this point. Reset the rule next serve.\"" },
      { mistake: "Drop landing too short — mid-court ball gets attacked", fix: "\"Clear the net with margin. A drop that's a little long is still better than mid-court.\"" }
    ],
    filler: "If time: coach assigns each team a 'drop target' (left half, right half) — must land in zone for the bonus."
  }},
          { time:"85–90", icon:"💬", label:"Debrief", type:"cool", desc:"What was hardest about the reset? When did the 3rd shot drop change the rally outcome?" }
        ],
        objectives: [
          "Hit a consistent 3rd shot drop with proper arc into the kitchen",
          "Use the reset to neutralize hard attacks and re-establish rally control",
          "Navigate the transition zone (midcourt) efficiently after the drop",
          "Apply 3rd shot drop intentionally during games, not just in drills"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cones for kitchen target"],
        coachTip: "The reset is the hardest skill to teach because it's counterintuitive — players want to hit hard when they're being attacked. Reward successful resets verbally even when the next shot goes in the net. The instinct to go soft is the win.",
        cues: [
          { label:"Grip pressure", text:"Loosen to 3/10 when absorbing pace" },
          { label:"Paddle face", text:"Open slightly to lift ball over net" },
          { label:"Body", text:"Bend knees, get low — don't swing at a hard shot" },
          { label:"Target", text:"Anywhere in the kitchen — placement is secondary to softness" },
          { label:"After reset", text:"Immediately advance to kitchen line" }
        ],
        youtube: [
          { title:"Improve Your 3rd Shot Drop — Intermediate", sub:"Arc, target zone, footwork while advancing", url:"https://www.youtube.com/watch?v=4x78S6Nc2iY" },
          { title:"The Reset: Soft Hands Under Pressure", sub:"Neutralizing speed-ups and hard attacks", url:"https://www.youtube.com/watch?v=bEd4sRqGvkA" },
          { title:"Navigating the Transition Zone", sub:"Moving through no-man's land efficiently", url:"https://www.youtube.com/watch?v=zKQIPtxY3y0" }
        ]
      },
      {
        num: 3,
        priority: "Every player places a lob past the opponent's overhead reach and executes a controlled overhead smash with a safe swing.",
        title: "Lobs & Overhead Smashes",
        subtitle: "Offensive Lob · Overhead Smash · Lob Defense & Recovery",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Mobility Warm-Up", type:"warmup", desc:"Lateral slides, backpedal sprints, split-step practice. Overhead shots require fast backward movement" },
          { time:"10–22", icon:"📖", label:"The Offensive Lob", type:"skill", desc:"When: opponent is crowding the kitchen, leaning forward, or not watching. Target: deep corner, at least 1m past the service line", guide: {
    setup: "Pairs at kitchen. Coach demos the disguised lob: same contact setup as a dink, then at the last moment, open paddle face and lift. Key: opponents must NOT see it coming.",
    steps: ["Start in dink position — same stance, same grip, same prep","Initiate a dink swing, then open paddle face at last moment","Lift upward, aim 2–3 feet over opponent's backhand reach","Ball must clear the player but drop before the baseline","Hold position — don't admire it. Opponent may get it"],
    progressions: [
      { label: "Foundation", desc: "Stationary lob practice: just lift the ball over a raised paddle held by coach — no disguise yet" },
      { label: "Build", desc: "Disguised lob from a dink rally — coach confirms it looked like a dink on initiation" },
      { label: "Challenge", desc: "Lob to backhand corner specifically — opponent scrambles, hits overhead or lets it bounce" }
    ],
    errors: [
      { mistake: "Lob too short — easy overhead put-away for opponent", fix: "\"Aim past their head by 3 feet. Err long, not short.\"" },
      { mistake: "Obvious setup — big backswing telegraphs the lob", fix: "\"Same prep as a dink every time. The lift happens in the last 6 inches.\"" }
    ],
    filler: "If time: lob accuracy challenge — 5 lobs, must land between the service line and baseline. Count how many."
  }},
          { time:"22–38", icon:"🏓", label:"Lob Placement Drill", type:"drill", desc:"Player at kitchen, partner feeds soft dinks. Player lobs on coach's signal. Target cones in deep corners. Progress from standing to mid-rally lobs", guide: {
    setup: "Pairs at kitchen. Player A lobs, Player B at net (no overheads yet — just calls 'in' or 'out' and lets ball bounce). Coach observes placement and height.",
    steps: ["Player A dinks 3 balls then lobs on ball 4","Player B announces 'in' (good lob) or 'out' (too long/wide) after bounce","A notes which direction had better placement","Alternate: lob cross-court vs. down-the-line","Target: 4/5 lobs land between service line and baseline"],
    progressions: [
      { label: "Foundation", desc: "Coach stands at net holding paddle up at head height — lob must clear it" },
      { label: "Build", desc: "B at net actively trying to reach with arm extended — lob must be out of reach" },
      { label: "Challenge", desc: "Designated target zone (cone at backhand corner) — lob within 1m of cone" }
    ],
    errors: [
      { mistake: "Consistent short lobs — landing at service box not behind", fix: "\"More lift, not more pace. Think of throwing a ball over a 10-foot wall.\"" },
      { mistake: "Lobs going out consistently", fix: "\"Find your ceiling — most players need 80% of their max lift, not 100%.\"" }
    ],
    filler: "If time: progressive target — start at service line, move cone back 2 feet each round until someone misses."
  }},
          { time:"38–50", icon:"📖", label:"Overhead Smash Mechanics", type:"skill", desc:"Point elbow up, get behind the ball, contact above head with full arm extension. Aim crosscourt or at feet. Safety rule: call 'mine' loudly", guide: {
    setup: "Coach lobs from kitchen, player at mid-court practices overhead. Safety first: announce 'overhead!' before swinging, clear sight lines.",
    steps: ["Toss racket side foot back — turn shoulders sideways to the net","Point non-paddle hand up to track the ball (helps positioning)","Get behind and under the ball — let it come to you","Contact at full arm extension, slightly in front","Drive down and through — aim crosscourt or at feet","Land and immediately reset to ready position"],
    progressions: [
      { label: "Foundation", desc: "Coach tosses high and slow — player smashes into open court, no opponent" },
      { label: "Build", desc: "Coach lobs from kitchen — player must move back and reset footwork before smashing" },
      { label: "Challenge", desc: "Target smash: aim for a cone in each back corner. 2/3 per side" }
    ],
    errors: [
      { mistake: "Standing under the ball — cramped swing", fix: "\"Back up 2 steps more than you think. Room to swing is everything.\"" },
      { mistake: "Contacting ball too far back — topspin goes up not down", fix: "\"Contact in front of your hitting shoulder, not beside your ear.\"" }
    ],
    filler: "If time: lob/overhead rally — one player lobs, other smashes. Reset after each smash. Most consecutive = winner."
  }},
          { time:"50–65", icon:"🏓", label:"Lob & Smash Sequence Drill", type:"drill", desc:"Teams of 2 vs 2. One team lobs, other team smashes. Rotate. Builds real game lob-defense pattern in a controlled setting", guide: {
    setup: "Pairs at kitchen. Player A at net, Player B at kitchen. B lobs, A moves back to smash, B lobs again if A's smash is retrievable. Full pattern: lob → smash → lob → smash.",
    steps: ["Player B throws up a lob from kitchen","Player A steps back and sets up overhead","A smashes to B's feet or sideline","B either concedes or retrieves and lobs again","Track: how many smashes does it take to win the point?"],
    progressions: [
      { label: "Foundation", desc: "B lobs gently, A smashes at half pace into open court — cooperative" },
      { label: "Build", desc: "B tries to keep it alive — smash to sidelines to win the point" },
      { label: "Challenge", desc: "Add second pair: 2v2 lob/smash match — lobbing team gets 1pt per overhead forced" }
    ],
    errors: [
      { mistake: "A sprinting back too fast — feet tangled at contact", fix: "\"Take 3 steps, then set up. Don't sprint past the ball.\"" },
      { mistake: "Smash landing out or in the net — no control", fix: "\"Swing at 70% power with control first. Pace is last, not first.\"" }
    ],
    filler: "If time: 'Survive the Lob' — playing team must hit 3 successful overheads in a row before they can score a point."
  }},
          { time:"65–82", icon:"🤝", label:"Social Play — Lob Allowed Games", type:"social", desc:"Full games. Lobs and smashes are in play. Coach watches for safe overhead mechanics and proper lob defense (backpedal, don't turn)", guide: {
    setup: "Games to 11. Lobs are not only allowed — there's a bonus point if the lob leads directly to a winner (opponent can't return the overhead or the lob bounces twice). Coach tracks lob attempts.",
    steps: ["Play normal points — all rules standard","Any team that wins a point via lob earns a bonus point","Coach calls 'clean lob!' when a lob lands in and is not retrieved","Rotate partners every game"],
    progressions: [
      { label: "Foundation", desc: "No bonus — just free-play with lobs allowed" },
      { label: "Build", desc: "Bonus point for clean lob winner" },
      { label: "Challenge", desc: "Must attempt a lob at least once per game — coach tracks" }
    ],
    errors: [
      { mistake: "Players avoiding lobs — fear of getting smashed", fix: "\"Wrong lob loses the point. Right lob wins it. Only one way to learn which is which.\"" },
      { mistake: "Lob-smash exchange getting dangerous — players too close", fix: "\"Back up before the smash. Kitchen line players must give room.\"" }
    ],
    filler: "If time: lob-only round — all 3rd shots must be lobs. Pure chaos — players love it."
  }},
          { time:"82–90", icon:"💬", label:"Debrief + Safety Check", type:"cool", desc:"Review safe overhead practices. When should you NOT lob? When should you let the smash bounce?" }
        ],
        objectives: [
          "Execute an offensive lob with proper height and depth to deep corners",
          "Hit a controlled overhead smash with safe mechanics",
          "Backpedal correctly to defend a lob (never turn your back)",
          "Communicate 'mine' and 'yours' with doubles partner during overheads"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cones for deep corner targets"],
        coachTip: "Many Level 2 players have never practiced the overhead intentionally. Before drilling speed, prioritize safe contact mechanics. A well-placed medium-pace overhead beats a wild hard smash every time.",
        cues: [
          { label:"Lob defense", text:"NEVER turn your back to the net — always backpedal facing the ball" },
          { label:"Overhead", text:"Point elbow up, get behind the ball, full arm extension" },
          { label:"Communication", text:"Call 'mine' immediately — no hesitation with your partner" },
          { label:"Bail out", text:"Let deep lobs bounce near the baseline if unsure" }
        ],
        youtube: [
          { title:"How & When to Lob in Pickleball", sub:"Pickleball Kitchen", url:"https://www.youtube.com/watch?v=KCAjD1oS7jQ" },
          { title:"Pickleball Overhead Smash Mechanics", sub:"Footwork, contact point, placement", url:"https://www.youtube.com/watch?v=g5fkSrkpGSg" },
          { title:"Offensive Lob & How to Defend It", sub:"Selkirk Sport", url:"https://www.youtube.com/watch?v=Rl4eeXpbAoY" }
        ]
      },
      {
        num: 4,
        priority: "Every pair calls 'mine/yours/switch' consistently and can walk through a stacking sequence before live play.",
        complexity: true,
        title: "Doubles Teamwork & Stacking",
        subtitle: "Partner Communication · Court Zone Ownership · Intro to Stacking",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Partner Warm-Up", type:"warmup", desc:"Side-by-side partner dink rally. Goal: move as a unit, maintain equal court coverage. Call 'switch' if one player is pulled wide" },
          { time:"10–25", icon:"📖", label:"Court Zone Ownership", type:"skill", desc:"Split the court down the middle. Cover your half. Poaching rules: forehand player takes the middle, but communicate first. 'Mine!' beats all", guide: {
    setup: "Show court diagram of left/right zones. Each player owns their half — the center is a decision zone. Key concept: if both players go for the middle, no one covers the corners.",
    steps: ["Coach draws centerline on court with a cone","Player on left owns everything left of center (including center if reaching left)","Player on right owns everything right of center","Communicate BEFORE the ball comes — don't wait until it's there","'Mine!' = I'm taking it. Silence = your partner takes it"],
    progressions: [
      { label: "Foundation", desc: "Coach tosses to middle — pair must communicate and one player calls it before contact" },
      { label: "Build", desc: "Live points — after every middle ball, pair debriefs: who should have taken that?" },
      { label: "Challenge", desc: "'No-talking' round — use only hand signals to communicate zone coverage" }
    ],
    errors: [
      { mistake: "Both going for middle ball — collision or double-fault", fix: "\"Whoever is moving forward calls 'Mine!' The other stops.\"" },
      { mistake: "Neither player calling it — both hesitate and let it bounce", fix: "\"Default rule: middle ball goes to the player with their forehand in the center.\"" }
    ],
    filler: "If time: 'Popcorn Drill' — coach tosses random balls, pair must call every ball before contact for 10 in a row."
  }},
          { time:"25–40", icon:"🏓", label:"Zone Ownership Drill", type:"drill", desc:"Feeder hits balls to random spots. Partners must communicate and cover zones. Penalize silent balls (no call = error)", guide: {
    setup: "Pairs at kitchen. Coach at opposite baseline tosses or feeds balls to varying positions: left, right, middle. Pair must communicate and reach each ball.",
    steps: ["Coach feeds ball to left — left player calls 'Mine!' and takes it","Coach feeds to right — right player calls and takes it","Coach feeds to middle — both wait for a call","If no call in 1 second: coach calls 'Ball!' and pair loses the point","10-ball sequence. Score: 7/10 clean calls = success"],
    progressions: [
      { label: "Foundation", desc: "Coach feeds slowly with visible direction — pair has time to call" },
      { label: "Build", desc: "Coach feeds at rally pace — calls must be quicker" },
      { label: "Challenge", desc: "Coach feeds without looking — no visual cue on direction. Pure reaction" }
    ],
    errors: [
      { mistake: "Calling after contact instead of before", fix: "\"Call it when you see it, not when you hit it. 'Mine!' before the swing.\"" },
      { mistake: "Left player taking right-side balls because they're faster", fix: "\"Stay in your zone even if you can reach it. Trust your partner.\"" }
    ],
    filler: "If time: shuffle the zones — switch sides mid-drill to test adaptability."
  }},
          { time:"40–55", icon:"📖", label:"Intro to Stacking", type:"skill", desc:"Stacking = both players line up on same side before serve/return to set forehand coverage. Intro: when to stack, how to slide into position", guide: {
    setup: "Walk-through at 50% speed. Coach shows the purpose: stacking lets both players maintain their preferred side regardless of the rotation. Draw diagram if possible.",
    steps: ["Serving side stack: both players start on the right side of court","Server serves (must cross court from position), partner stands near center T","After serve: slide to preferred sides (server left, partner right — or reverse)","Returning side stack: non-returner stands at net on right side","Returner hits return, then both slide to preferred sides","Key: the slide happens AFTER the serve or return clears the net"],
    progressions: [
      { label: "Foundation", desc: "Walk-through only — no actual hitting. Coach narrates each step" },
      { label: "Build", desc: "Half-speed with real serves and returns — coach calls 'Slide!' as trigger" },
      { label: "Challenge", desc: "Full speed stacking: pair must reach their preferred positions before the 3rd shot lands" }
    ],
    errors: [
      { mistake: "Sliding too early — leaving court open before serve or return lands", fix: "\"Wait for the ball to cross the net THEN slide. Don't leave before it's done.\"" },
      { mistake: "Non-serving partner sliding the wrong direction", fix: "\"Decide preferred sides BEFORE the game starts. Left player stays left always.\"" }
    ],
    filler: "If time: stacking race — fastest pair to correctly position after serve wins."
  }},
          { time:"55–70", icon:"🏓", label:"Stack Positioning Drill", type:"drill", desc:"Walk through stacking positions slowly. Serve, stack slide, first shot. No pressure. Goal: understand the movement pattern", guide: {
    setup: "Two pairs. One pair practices stacking every point. Coach observes and calls errors. Rotate after 10 points.",
    steps: ["Pair 1 stacks every serve: both line up on right of center before serving","After serve: both slide to assigned sides","Return side: non-returner stacks at net same side as returner","After return: both slide to sides","Play the point out normally after positioning"],
    progressions: [
      { label: "Foundation", desc: "Practice serving-side stack only (simpler) — 5 points per pair" },
      { label: "Build", desc: "Practice return-side stack — 5 points" },
      { label: "Challenge", desc: "Full match stacking: both sides, every point. No exceptions" }
    ],
    errors: [
      { mistake: "Partners sliding to same side — double coverage", fix: "\"Pre-agreed: Player 1 always left, Player 2 always right. Say it out loud before starting.\"" },
      { mistake: "Stacking taking so long they miss the 3rd shot", fix: "\"Get your feet moving as the ball crosses the net. Don't wait until it lands.\"" }
    ],
    filler: "If time: 'No-Stack Comparison' — play 2 points without stacking, then 2 with. What's different?"
  }},
          { time:"70–82", icon:"🤝", label:"Social Play — Team Communication Focus", type:"social", desc:"Games to 11. Each team picks a communication word ('switch', 'mine', 'yours') and must use it every rally", guide: {
    setup: "Games to 11. Rule: pair earns a bonus point every time they call a middle ball out loud AND win the point. Coach listens for communication.",
    steps: ["Play full games — normal scoring","Both players must call every middle ball before contact (not optional)","Bonus point tracked separately on whiteboard","Coach narrates: 'Good call!' or 'Who takes that?'","Rotate pairs every game"],
    progressions: [
      { label: "Foundation", desc: "No pressure — just encourage verbal calling, no bonus points yet" },
      { label: "Build", desc: "Track bonus points — team with most communication points wins the session" },
      { label: "Challenge", desc: "Penalty: if both players call the same ball and collide, opponent gets 2 points" }
    ],
    errors: [
      { mistake: "Silent pairs — nobody calling anything", fix: "\"Volume up. Even if you're wrong, call it. Your partner needs to hear you.\"" },
      { mistake: "Only one partner communicating", fix: "\"Both partners call. The quiet one is making it harder for their team.\"" }
    ],
    filler: "If time: 'Chatter Challenge' — pair that communicates most (coach tallies calls) wins a free point every game."
  }},
          { time:"82–90", icon:"💬", label:"Partner Feedback Session", type:"cool", desc:"Partners share one thing the other did well and one thing to work on" }
        ],
        objectives: [
          "Own your half of the court — stop leaving gaps down the middle",
          "Communicate 'mine,' 'yours,' and 'switch' in every rally",
          "Understand the basic concept and movement of stacking",
          "Build court chemistry with a partner through structured play"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cones for court zones"],
        coachTip: "Silence is the #1 cause of doubles errors at this level. Make communication non-optional — if a ball lands silently (no call), treat it as an error in the drill regardless of where it lands.",
        cues: [
          { label:"'Mine!'", text:"Calling first wins the ball, partner clears" },
          { label:"'Yours!'", text:"Said early, not last-second, to avoid hesitation" },
          { label:"'Switch!'", text:"One player was pulled wide, partners rotate court position" },
          { label:"Stacking", text:"Both players line up same side, then slide into preferred position after serve" }
        ],
        youtube: [
          { title:"Doubles Communication & Court Coverage", sub:"Mine yours switch, zone ownership basics", url:"https://www.youtube.com/watch?v=1ZcRiDs1zz4" },
          { title:"Intro to Stacking for Doubles", sub:"When to stack, how to slide into position", url:"https://www.youtube.com/watch?v=npCzByb7IUo" },
          { title:"Middle Ball Strategy & Poaching", sub:"Who takes the middle, poach setup", url:"https://www.youtube.com/watch?v=sZlgYm6yUlY" }
        ]
      },
      {
        num: 5,
        priority: "Every player serves to a deliberate target and rushes to the kitchen line after every return — no hanging back.",
        title: "Serve & Return Strategy",
        subtitle: "Power & Placement Serves · Deep Returns · Return + Rush Sequence",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Serve Warm-Up", type:"warmup", desc:"10 serves each — no target, just groove the motion. Check grip, stance, contact point" },
          { time:"10–25", icon:"📖", label:"Serve Placement Strategy", type:"skill", desc:"3 serve targets: (1) deep to backhand, (2) deep to body, (3) wide to forehand corner. Each disrupts a different return pattern", guide: {
    setup: "Coach diagrams 3 serve targets: deep backhand corner, body (at shoulder), wide forehand angle. Players identify which target gives them the best 3rd shot setup.",
    steps: ["Coach explains why deep backhand is the default serve: forces weak return","Body serve forces cramped return swing","Wide forehand pulls opponent off court — but opens up your own court","Each player picks their go-to serve target for today","Visualize: where does the return go if serve lands there?"],
    progressions: [
      { label: "Foundation", desc: "Practice each of the 3 targets 5 times without opponents" },
      { label: "Build", desc: "Returner feeds back after serve — server must read where the return goes based on serve placement" },
      { label: "Challenge", desc: "Server calls target out loud before serving, then executes" }
    ],
    errors: [
      { mistake: "Serve landing in the middle of the service box — no advantage", fix: "\"Middle serves get middle returns. Pick a corner and own it.\"" },
      { mistake: "Trying the wide forehand serve and losing angle — short serve", fix: "\"Wide serve only when your opponent is already leaning to backhand.\"" }
    ],
    filler: "If time: 'Serve Bingo' — each player must hit all 3 targets at least once in 9 serves."
  }},
          { time:"25–40", icon:"🏓", label:"Target Serve Drill", type:"drill", desc:"3 cones: backhand deep, center T, wide forehand. Players rotate through all 3 targets (5 serves each). Track accuracy %", guide: {
    setup: "3 cones placed at: deep backhand corner, body T line, wide forehand. Players serve 10 balls total, aiming for specific cones on coach's call.",
    steps: ["Coach calls cone name before each serve","Player serves to that target — cone hit = bonus point","10-ball round. Score: which target was most accurate?","Switch server every 10 balls","Track: players discover their strongest and weakest serve direction"],
    progressions: [
      { label: "Foundation", desc: "Serve to any cone — no call. Just practice hitting targets" },
      { label: "Build", desc: "Coach calls cone 1 second before serve — player must adjust aim quickly" },
      { label: "Challenge", desc: "Partner returner at baseline — serve must force a weak return (coach judges)" }
    ],
    errors: [
      { mistake: "Consistent short serves — landing in kitchen", fix: "\"More forward weight transfer. Drive through the ball, don't flick.\"" },
      { mistake: "Pace without placement — hard serves missing cone by 3+ feet", fix: "\"Drop to 60% pace and nail the target first. Speed comes after accuracy.\"" }
    ],
    filler: "If time: 'Serve Playoffs' — head-to-head, each player calls their own target and executes. Crowd votes on best placement."
  }},
          { time:"40–52", icon:"📖", label:"Return + Rush System", type:"skill", desc:"Deep return → immediately sprint to kitchen line. The return of serve is an attack, not a defensive shot. Land it deep, low, and keep moving", guide: {
    setup: "Coach explains the return-and-rush: the best return strategy is to hit deep and IMMEDIATELY move to the kitchen. The kitchen line is an offensive position — don't stay back.",
    steps: ["Returner stands 1–2 feet behind baseline (give room for deep serve)","Read the serve direction, step in, contact early","Swing through deep and cross-court (safer margin)","Immediately sprint forward — goal: reach the kitchen by the time your return lands","Split-step as server hits the 3rd shot"],
    progressions: [
      { label: "Foundation", desc: "Return practice only — focus on depth, no rushing yet" },
      { label: "Build", desc: "Return + 5 steps toward kitchen (don't need to reach all the way)" },
      { label: "Challenge", desc: "Full return-and-rush: reach kitchen line before server hits 3rd shot" }
    ],
    errors: [
      { mistake: "Staying back at baseline after return — giving up kitchen advantage", fix: "\"Return is done, feet are moving. Never watch your return from the baseline.\"" },
      { mistake: "Rushing before contact — weak return from bad position", fix: "\"Contact first, then go. Two separate things.\"" }
    ],
    filler: "If time: coach stands at NVZ — returner must reach coach's position before the 3rd shot. Race condition."
  }},
          { time:"52–68", icon:"🏓", label:"Return & Rush Drill", type:"drill", desc:"Live serves. Returner hits deep and sprints to kitchen. Server must 3rd-shot drop. Builds the full serve → return → net sequence", guide: {
    setup: "Full pairs: server at baseline, returner at baseline. Drill: serve, return deep, returner rushes to kitchen. Server hits 3rd shot, play continues.",
    steps: ["Server serves — any target","Returner returns deep (coach confirms depth with 'Deep!' or 'Short!')","Returner immediately rushes to kitchen line","Split-step as server contacts 3rd shot","Play point out — server's team tries to drop and join the kitchen too","After 5 points: switch server/returner"],
    progressions: [
      { label: "Foundation", desc: "Server feeds easy serves — returner focuses only on deep return + rush" },
      { label: "Build", desc: "Normal serves — returner must reach kitchen by 3rd shot contact" },
      { label: "Challenge", desc: "Add rule: returner loses point if not at kitchen by 3rd shot" }
    ],
    errors: [
      { mistake: "Deep return going long — trying to hit too hard", fix: "\"Target: 3 feet inside the baseline. Deep doesn't mean out.\"" },
      { mistake: "Returner stopping halfway — not committing to kitchen", fix: "\"Kitchen or bust. No man's land (middle of court) is the worst position.\"" }
    ],
    filler: "If time: 'Return Race' — two pairs side by side, race to see who gets kitchen first after return."
  }},
          { time:"68–82", icon:"🤝", label:"Social Play — Serve Strategy Games", type:"social", desc:"Games to 11. After each game, each player names the serve they hit most and whether it was intentional", guide: {
    setup: "Games to 11. Point of emphasis: after every point, coach asks the server 'What was your target?' Server must answer. Keeps intentionality high.",
    steps: ["Play full games — normal scoring","After every lost point on serve: coach asks 'Target?' Server answers","Coach notes whether target + execution matched","Any server who calls target AND hits it gets a point tracked on side whiteboard","Rotate every game"],
    progressions: [
      { label: "Foundation", desc: "No tracking — just play with awareness of serve target" },
      { label: "Build", desc: "Call target before every serve out loud — partner confirms after" },
      { label: "Challenge", desc: "Switch serve target every 2 serves — forces adaptability" }
    ],
    errors: [
      { mistake: "Players not rushing after return during social play — reverting to old habits", fix: "\"Freeze! Go back to the baseline. Return, then rush. Every time.\"" },
      { mistake: "Servers reverting to safe middle serves", fix: "\"One game: middle serves are illegal. Call a corner every time.\"" }
    ],
    filler: "If time: 'Target Game' — 2 bonus points if serve lands within 1 foot of cone. Players choose which cone before serving."
  }},
          { time:"82–90", icon:"💬", label:"Debrief", type:"cool", desc:"Which serve target was hardest? Did the return + rush change the rally outcome?" }
        ],
        objectives: [
          "Hit 3 intentional serve placements with 70%+ accuracy",
          "Execute the return-of-serve deep and rush to kitchen in one fluid motion",
          "Understand why deep returns are more valuable than hard returns",
          "Begin thinking about serve/return as part of a strategic sequence"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","3 cone targets"],
        coachTip: "Many Level 2 players serve with no plan. Even just asking 'where are you serving this point?' before the drill starts creates tactical habits that transfer directly to match play.",
        cues: [
          { label:"Target 1 — Deep Backhand", text:"Most players' weakest return side" },
          { label:"Target 2 — Body Serve", text:"Jams the returner, limits their swing" },
          { label:"Target 3 — Wide Forehand", text:"Opens up the court for your next shot" },
          { label:"Return", text:"Deep return → start moving immediately after contact → split step as server hits 3rd shot → continue to kitchen" }
        ],
        youtube: [
          { title:"Serve Placement Strategy — 3 Targets", sub:"Where to serve, how placement disrupts returns", url:"https://www.youtube.com/watch?v=ztgXnvJ-IwM" },
          { title:"Return Deep & Rush the Kitchen", sub:"Return + sprint sequence, deep return importance", url:"https://www.youtube.com/watch?v=OxNnewWzUC4" },
          { title:"Doubles Strategy: Serve, Return & Positioning", sub:"Simone Jardim", url:"https://www.youtube.com/watch?v=Ve6izbmBwGM" }
        ]
      },
      {
        num: 6,
        priority: "Every player attempts an ATP when the ball drifts wide, and blocks a speed-up with soft hands instead of counter-driving.",
        title: "Speed-ups, ATPs & Counter Defense",
        subtitle: "Erne & ATP · Speed-Up Counters · Offensive Pressure Patterns",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Fast Hands Warm-Up", type:"warmup", desc:"Close-range volley exchange at kitchen line. Rapid-fire back and forth — builds hand speed and reflex reaction" },
          { time:"10–22", icon:"📖", label:"The ATP (Around the Post)", type:"skill", desc:"Ball pulled wide of the sideline = opportunity for ATP. Hit around, not over the net post. No height restriction — legally below net level", guide: {
    setup: "Coach demos the ATP: ball drifts wide past the sideline — instead of letting it go out, hit it around the post (not over it). Legal if both feet clear the NVZ extension.",
    steps: ["Wide dink drifts toward sideline — recognize the ATP opportunity","Step outside the court, feet clear the NVZ","Contact ball below net height, angled past the post","Ball travels around (not over) the net post","No need for it to clear net height — it goes around the side","Land back in-bounds or out — only the contact point matters"],
    progressions: [
      { label: "Foundation", desc: "Coach hand-feeds balls wide past sideline — player steps out and shadows the ATP swing (no net)" },
      { label: "Build", desc: "With net: feed wide balls, player executes ATP into opposite court" },
      { label: "Challenge", desc: "Live dinking — player recognizes and attempts ATP in real rally" }
    ],
    errors: [
      { mistake: "Trying to hit over the post — wrong shot", fix: "\"Around, not over. You have to go outside the post, not above it.\"" },
      { mistake: "Feet still in the NVZ when contacting — fault", fix: "\"Step out before you swing. Both feet clear the NVZ extension line.\"" }
    ],
    filler: "If time: ATP challenge — 5 feeds each, how many successful ATPs? Must land in-bounds cross-court."
  }},
          { time:"22–36", icon:"🏓", label:"ATP Setup Drill", type:"drill", desc:"Feeder hits wide cross-court dink. Player sprints wide and attempts ATP. Rotate every 5 attempts. Not about making it every time — about recognizing the opportunity", guide: {
    setup: "Player A at kitchen dinks cross-court. Player B intentionally dinks wide — setting up Player A's ATP opportunity. Player A executes.",
    steps: ["Player B sends a wide cross-court dink that drifts past the sideline","Player A reads the wide drift early — starts moving laterally","Player A steps outside the court, positions feet outside NVZ extension","Executes ATP around the post — aims at Player B's feet or open court","Player B tries to retrieve (makes the drill live)"],
    progressions: [
      { label: "Foundation", desc: "B throws a very wide ball by hand — A just practices the footwork and contact point" },
      { label: "Build", desc: "B dinks wide intentionally — A reads and attempts ATP, B chases" },
      { label: "Challenge", desc: "B doesn't telegraph — A must read from the dink direction alone whether to ATP" }
    ],
    errors: [
      { mistake: "Hesitating too long — ball lands out before contact", fix: "\"Decide by the time the ball crosses the net. Late move = late hit = out.\"" },
      { mistake: "ATP going into the net post (not around it)", fix: "\"Swing parallel to the sideline, not at the net. The angle is flatter than you think.\"" }
    ],
    filler: "If time: ATP race — coach feeds alternating wide balls to both sidelines, players race to execute ATPs on their side."
  }},
          { time:"36–50", icon:"📖", label:"Counter-Defending Speed-ups", type:"skill", desc:"When opponent speeds up: block with a compact punch, redirect toward their feet or sideline. DO NOT swing back hard. The counter is about redirection, not power", guide: {
    setup: "Coach teaches the compact block counter: when opponent speeds up, compact paddle in front, soft hands, redirect to open court. Do NOT drive back — absorb and redirect.",
    steps: ["See opponent wind up for speed-up — paddle moves in front of body","Compact block: elbow bent, paddle at chest height, face slightly open","At contact: soft hands — let ball die on paddle","Redirect: angle paddle to send ball to open court or at feet","Follow the block forward — don't retreat"],
    progressions: [
      { label: "Foundation", desc: "Coach hand-feeds medium-pace drives at chest — player blocks to kitchen" },
      { label: "Build", desc: "Partner speeds up at realistic pace — player blocks cross-court" },
      { label: "Challenge", desc: "Player must block to a specific target (near sideline or at feet) — not just over the net" }
    ],
    errors: [
      { mistake: "Swinging back at the speed-up — losing control", fix: "\"Block, don't swing. The speed-up provides all the pace you need.\"" },
      { mistake: "Flinching backward — ball pops up", fix: "\"Stand your ground. Step into the block, don't step back from it.\"" }
    ],
    filler: "If time: 'Speed-Up Gauntlet' — player must successfully block 5 consecutive speed-ups to win."
  }},
          { time:"50–68", icon:"🏓", label:"Speed-Up Counter Drill", type:"drill", desc:"Player A speeds up from dink rally (randomly). Player B counters and redirects. Rotate after 3 speed-ups. Progress: slow speed-up → medium → game pace", guide: {
    setup: "Pairs at kitchen. Player A speed-ups. Player B counters with a compact block. Both players alternate — speed-up → counter → speed-up → counter. Track: who misses first?",
    steps: ["Player A speeds up at B's body or shoulder","Player B blocks with soft hands — redirects cross-court","Player A receives the block and speeds up again","Continue the chain — count consecutive exchanges","First player to miss: loses. Switch roles"],
    progressions: [
      { label: "Foundation", desc: "Start at 50% pace — build the pattern before adding pace" },
      { label: "Build", desc: "Full rally pace — realistic speed-up exchange" },
      { label: "Challenge", desc: "Add movement: counter blocks must alternate left and right — A must move to reach each" }
    ],
    errors: [
      { mistake: "Block going too high — giving opponent an easy speed-up back", fix: "\"Push the block down at the net. Low block = hard to attack.\"" },
      { mistake: "Counter turning into a drive — breaking the pattern", fix: "\"Block only. No drive counters until you can block 10 in a row.\"" }
    ],
    filler: "If time: 'Speed-up ping pong' — fastest consistent exchange wins. Coach times 30-second rounds."
  }},
          { time:"68–82", icon:"🤝", label:"Social Play — Aggressive Games", type:"social", desc:"Games to 11 with 'attack encouraged' format. Players try to speed up and counter in every kitchen rally", guide: {
    setup: "Games to 11. Bonus point rule: if a player executes a successful ATP (ball goes around the post and lands in) — 2 bonus points. Coach confirms legality.",
    steps: ["Play normal games — all rules apply","ATP attempts are encouraged (even failures don't penalize)","Coach calls: 'ATP attempt!' when wide ball opportunity arises","Successful ATP = 2 bonus points, tracked on board","Counter-defense: coach notes whether players are blocking vs. driving speed-ups"],
    progressions: [
      { label: "Foundation", desc: "No bonus — just play aggressively and try ATPs" },
      { label: "Build", desc: "Track ATP bonus points" },
      { label: "Challenge", desc: "Speed-up challenge: team earns 1 extra point for every speed-up that wins the rally outright" }
    ],
    errors: [
      { mistake: "Players not attempting ATPs even when ball goes wide", fix: "\"If the ball is past the sideline, ATP is always worth trying. Zero risk.\"" },
      { mistake: "Counter-defense reverting to panic drives", fix: "\"One game: no drives allowed off a speed-up. Block or dink only.\"" }
    ],
    filler: "If time: ATP Shootout — coach feeds wide balls alternating sides. First to 3 ATPs wins."
  }},
          { time:"82–90", icon:"💬", label:"Debrief", type:"cool", desc:"When did the ATP appear — did you take it? What was the hardest speed-up to counter?" }
        ],
        objectives: [
          "Recognize when an ATP opportunity appears and attempt it",
          "Counter a speed-up with a compact block/redirect (not a big swing)",
          "Build offensive intent in kitchen rallies without abandoning patience",
          "Understand the difference between a winning speed-up and a reckless one"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cones for ATP target zone"],
        coachTip: "Session 6 is a big energy session — players love the ATP and fast-hands stuff. Use that energy to also reinforce the discipline of the counter-defense. The best offensive players at this level can both attack AND absorb attacks calmly.",
        cues: [
          { label:"ATP trigger", text:"Ball is pulled outside the sideline — the ATP window is open" },
          { label:"ATP contact", text:"Hit around the net post, not over it — aim to open court" },
          { label:"Counter defense", text:"Paddle up and forward — compact block, redirect to feet or sideline, NOT a hard swing back" },
          { label:"After block", text:"Immediately reset to neutral dinking position" }
        ],
        youtube: [
          { title:"The ATP Shot — Around the Post", sub:"LevelUp Pickleball Camps", url:"https://www.youtube.com/watch?v=RZ0JD7DFWwY" },
          { title:"Countering Speed-Ups at the Kitchen", sub:"How to block and redirect fast attacks", url:"https://www.youtube.com/watch?v=t6eIFG_FO9s" },
          { title:"Erne Setup & Execution Drill", sub:"Pickleball Kitchen", url:"https://www.youtube.com/watch?v=XrVpUN9Yqr4" }
        ]
      },
      {
        num: 7,
        priority: "Every player enters each game with a 2-tactic written plan and uses the 3-second reset routine after every error.",
        title: "Match Play Tactics & Mental Game",
        subtitle: "Game Plans · Shot Selection · Staying Mentally Focused",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Flow State Warm-Up", type:"warmup", desc:"Silent rally — no talking for 5 minutes. Pure focus on ball, contact, reset. Builds calm concentration before a tactics-heavy session" },
          { time:"10–25", icon:"📖", label:"Building a Game Plan", type:"skill", desc:"Before a match: identify opponent weaknesses. Set 1–2 tactics to execute. Review after every 5 points. Simple plans work better than complex ones", guide: {
    setup: "Each pair gets a whiteboard card (or paper). Before games, they write: (1) Opponent weakness to target, (2) Our strength to lean on, (3) One specific tactic. Review after every 5 points.",
    steps: ["Observe opponents during warm-up: backhand comfort? kitchen patience? lob tendencies?","Write your 2-tactic plan: e.g. 'Serve to backhand + attack body speed-up'","Start the game executing the plan — not reacting randomly","After 5 points: pause and discuss — is the plan working?","Adjust if needed: 'Their backhand is strong, switch to body serves'"],
    progressions: [
      { label: "Foundation", desc: "Coach assigns the tactic — pair just executes it for one game" },
      { label: "Build", desc: "Pair writes own plan — review at halftime (5 points)" },
      { label: "Challenge", desc: "Pair adjusts plan mid-game and explains why to coach afterward" }
    ],
    errors: [
      { mistake: "Plan too complex — 5 tactics that contradict each other", fix: "\"One tactic per partner. Two max. Simple beats clever.\"" },
      { mistake: "Abandoning the plan after losing 2 points", fix: "\"Give the plan 5 points before adjusting. Too early to judge.\"" }
    ],
    filler: "If time: 'Counter-Game' — coach tells you what the other team's plan is. Can you neutralize it?"
  }},
          { time:"25–38", icon:"📖", label:"Shot Selection Framework", type:"skill", desc:"Ask before every shot: 'Is this ball above or below the net?' Above = attack opportunity. Below = dink or drop. This single question eliminates most unforced errors at 3.0–3.5 level", guide: {
    setup: "Teach the one question that eliminates most errors: 'Is this ball above or below the net tape?' Above = opportunity. Below = patience.",
    steps: ["Before every shot: read the ball height at contact","Above net tape: attack or speed-up if in position","At net tape: drive carefully or dink","Below net tape: dink or drop — no power shots","Practice calling out 'above' or 'below' during drills before applying in games"],
    progressions: [
      { label: "Foundation", desc: "Coach tosses balls at varying heights — players call 'above' or 'below' before swinging" },
      { label: "Build", desc: "Live rally — players narrate their reads out loud during practice points" },
      { label: "Challenge", desc: "Apply in full games — coach observes and counts correct/incorrect shot selection decisions" }
    ],
    errors: [
      { mistake: "Attacking balls below the tape — errors into net", fix: "\"If you can't see daylight between the ball and the tape, dink it.\"" },
      { mistake: "Dinking floaters above tape — missed opportunities", fix: "\"Float above the tape with no pace = attack. Don't leave free points.\"" }
    ],
    filler: "If time: 'Frame-by-Frame' drill — play in slow motion (literal slow swings), calling out height before every shot."
  }},
          { time:"38–55", icon:"🏓", label:"Tactical Scenario Drills", type:"drill", desc:"Coach calls scenarios. Players adapt in real-time during live points. Builds real-match adjustment habits", guide: {
    setup: "Coach calls a scenario before each rally starts. Players must execute the prescribed tactic. 5 scenarios per round.",
    steps: ["Coach: 'Return deep, rush the kitchen, kitchen-only play'","Coach: 'Server must drop on 3rd shot — no drives'","Coach: 'First team to speed up from a float wins the point'","Coach: 'No lobs — dink battle only'","Coach: 'Open play — use your game plan'","After each scenario: quick 30-second debrief"],
    progressions: [
      { label: "Foundation", desc: "Coach gives the tactic AND the setup — very guided" },
      { label: "Build", desc: "Coach gives only the constraint — pair decides how to execute" },
      { label: "Challenge", desc: "Pair calls their own scenario, then executes. Coach observes whether plan matched play" }
    ],
    errors: [
      { mistake: "Players reverting to default habits under pressure — ignoring scenario", fix: "\"Stop the point. Reset. Try the scenario again.\"" },
      { mistake: "Both partners executing different tactics — no alignment", fix: "\"Before the point starts: agree out loud on what you're both doing.\"" }
    ],
    filler: "If time: 'Chaos Scenarios' — coach calls a new constraint every 30 seconds during live play. Adaptability test."
  }},
          { time:"55–65", icon:"📖", label:"The Mental Game", type:"skill", desc:"Bouncing back from errors: 3-second rule (react, reset, refocus). Never punish yourself mid-rally. Momentum recognition: when to slow down, when to keep pressure on", guide: {
    setup: "Short whiteboard session. Coach teaches the 3-second rule and momentum concepts. Ask: 'What do you do after you hit the ball into the net on a big point?'",
    steps: ["Error happens → allow 3 seconds to react (even say 'ugh!')","Then: take a breath, bounce paddle on palm, say your reset word ('Next' or 'Ready')","Walk back to position — head up, shoulders back","Momentum: if you lose 3 in a row, slow down between points. Take extra time.","If winning: keep the pace up — don't let opponent reset"],
    progressions: [
      { label: "Foundation", desc: "Practice the 3-second routine with a fake error — mime missing, then go through the reset" },
      { label: "Build", desc: "Apply in practice points — coach observes reset routine after errors" },
      { label: "Challenge", desc: "High-pressure rally to 3 — observe who uses the reset routine and who tilts" }
    ],
    errors: [
      { mistake: "Players dwelling on errors — body language crashes", fix: "\"3 seconds, then done. After the 3rd second it's just hurting your next point.\"" },
      { mistake: "Players rushing after a big win — overconfidence errors", fix: "\"Every point starts at 0-0. The last point doesn't help you.\"" }
    ],
    filler: "If time: 'Tilt Test' — coach deliberately makes distracting comments during a point. Players practice ignoring and resetting."
  }},
          { time:"65–82", icon:"🤝", label:"Tactical Social Play", type:"social", desc:"Before each game, teams write down their 2-tactic game plan. After the game: did the plan work? What would you change?" },
          { time:"82–90", icon:"💬", label:"Game Review + Level 3 Preview", type:"cool", desc:"Share game plans and outcomes. Coach previews Level 3 — advanced dinking patterns, tournament play, DUPR rating system" }
        ],
        objectives: [
          "Create a simple 2-tactic game plan before starting a match",
          "Apply the 'above/below net' shot selection framework consistently",
          "Use the 3-second reset routine after errors to stay mentally focused",
          "Begin reading opponents and adapting tactics mid-match"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Small cards for game plans"],
        coachTip: "The mental game session often unlocks the most growth. Players realize they've been making decisions based on emotion, not strategy. The 'above/below' rule alone can take a player from 3.0 to 3.5 within weeks of consistent application.",
        cues: [
          { label:"Ball below net height", text:"Dink, drop, or reset — never attack" },
          { label:"Ball at net height", text:"Redirect firmly to feet — don't go for winner yet" },
          { label:"Ball above net height", text:"Speed-up attack or volley put-away" },
          { label:"3-second reset", text:"React (brief exhale) → Reset (breath, relax grip) → Refocus (cue word: 'ready' or 'next')" }
        ],
        youtube: [
          { title:"Building a Pickleball Game Plan", sub:"Zane Navratil", url:"https://www.youtube.com/watch?v=aPaOy_qw_mU" },
          { title:"Pickleball Mental Game — Staying Calm", sub:"3rd Shot Drop", url:"https://www.youtube.com/watch?v=kZbga4quTAg" },
          { title:"Shot Selection: When to Attack vs Dink", sub:"Decision-making framework for 3.0–3.5 players", url:"https://www.youtube.com/watch?v=mWEkPMhxW14" }
        ]
      },
      {
        num: 8,
        priority: "Every player competes in at least one full match with correct scoring, and every player is recognized individually by their coach.",
        title: "Tournament Day & Graduation 🏆",
        subtitle: "Round-Robin Tournament · Skills Assessment · Certificate & What's Next",
        timeline: [
          { time:"0–10", icon:"🔥", label:"All-Skills Recap Warm-Up", type:"warmup", desc:"7-session circuit: dink rally, 3rd shot drop, reset, lob, overhead, stack position, serve target. 1 minute each" },
          { time:"10–55", icon:"🏆", label:"Round-Robin Tournament", type:"game", desc:"Groups of 4. Games to 9 (time-capped). All Level 2 skills in play. Coach observes tactics, not just results" },
          { time:"55–70", icon:"📋", label:"Level 2 Skills Assessment", type:"skill", desc:"3rd shot drop (15/20 in kitchen), cross-court dink rally (15 consecutive), counter-defense (5 redirects), overhead smash (3 clean contacts)" },
          { time:"70–82", icon:"🎓", label:"Graduation Ceremony", type:"cool", desc:"Certificates of completion. Coach gives individual highlight to each player. Group photo. Info on EA Leagues and Level 3" },
          { time:"82–90", icon:"📣", label:"What's Next — Level 3 Preview", type:"cool", desc:"Introduce DUPR rating system, tournament play pathways, EA Leagues program" }
        ],
        objectives: [
          "Complete full round-robin with Level 2 tactics applied",
          "Pass all Level 2 skills assessment benchmarks",
          "Receive individual growth feedback from coach",
          "Understand competitive pathway: EA Leagues and DUPR"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Score sheets","Certificates","Level 3 info cards"],
        coachTip: "End with individual highlights — every player should hear something specific and positive about their growth. This builds intrinsic motivation and retention into Level 3 or EA Leagues.",
        assessment: [
          { skill:"3rd Shot Drop", target:"15/20 land in kitchen from baseline serve" },
          { skill:"Cross-Court Dink", target:"15-shot consecutive rally with partner" },
          { skill:"Reset Under Pressure", target:"5 successful resets from medium-pace attacks" },
          { skill:"Overhead Smash", target:"3 clean overheads from coach lob, land in bounds" },
          { skill:"Communication", target:"Calls mine/yours consistently in 2+ rallies observed" }
        ],
        youtube: [
          { title:"PrimeTime Pickleball", sub:"Best intermediate channel — tactics, technique, strategy", url:"https://www.youtube.com/@PrimeTimePickleball" },
          { title:"The Pickleball Studio", sub:"Doubles strategy, mental game, match analysis", url:"https://www.youtube.com/@ThePickleballStudio" },
          { title:"Coach Briones", sub:"Deep-dive technique videos for 3.0–4.0 players", url:"https://www.youtube.com/@CoachBriones" }
        ]
      }
    ]
  },
  3: {
    name: "Level 3 — Advanced",
    duration: "90 min",
    skill: "3.5→4.0",
    drills: "30+",
    colorClass: "l3",
    sessions: [
      {
        num: 1,
        priority: "Every player attempts an Erne or fake speed-up in live play — the attempt matters more than whether it works.",
        title: "Advanced Dink Patterns",
        subtitle: "Erne Setup · Fake Speed-ups · Dink-to-Attack Sequencing",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Fast Kitchen Warm-Up", type:"warmup", desc:"Cross-court dink rally at pace. No slow warm-up — Level 3 players arrive ready. Focus: paddle prep early, split step timing, redirecting angles" },
          { time:"10–25", icon:"🎯", label:"The Erne — Setup & Execution", type:"skill", desc:"Jump or step around the NVZ corner to volley a wide dink. Legal if both feet clear the NVZ. Key: disguise the movement until the last moment", guide: {
    setup: "Coach demos the Erne: player steps or jumps around the NVZ corner post to volley a wide dink before it crosses back. Both feet must clear the NVZ and NVZ extension line — neither foot in the kitchen or its sideline extension.",
    steps: ["Watch opponent's dink direction — wide cross-court is the Erne setup ball","Begin telegraphing movement late — too early and opponent redirects","Step or hop outside the NVZ corner, both feet beyond the extension line","Contact ball in the air at or above net height","Drive down and cross-court or at opponent's feet","Land outside the NVZ — then re-enter the court"],
    progressions: [
      { label: "Foundation", desc: "Shadow Erne: partner feeds wide dinks, player steps around corner and mimes contact — no actual hit. Footwork only." },
      { label: "Build", desc: "Live Erne: partner feeds intentionally wide — player executes contact and lands in-bounds" },
      { label: "Challenge", desc: "Semi-disguised Erne: player hides movement until the last possible moment — opponent can't redirect in time" }
    ],
    errors: [
      { mistake: "Foot touching the NVZ or its sideline extension at contact — fault", fix: "\"Plant outside the post. If your shoe clips the imaginary line, it's a fault.\"" },
      { mistake: "Erne too early — opponent sees it and redirects down-the-line", fix: "\"Make the move late. Patience is the Erne's best setup tool.\"" }
    ],
    filler: "If time: Erne challenge — 5 feeds each, both feet must clear. Who converts the most clean Ernes?"
  }},
          { time:"25–40", icon:"🏓", label:"Erne Setup Drill", type:"drill", desc:"Player A dinks cross-court repeatedly. Player B positions, waits for short wide dink, executes Erne. Rotate every 5 attempts", guide: {
    setup: "Player A dinks cross-court continuously. Player B at kitchen watches for the drift wide, then executes Erne. After each attempt (success or fail), reset and continue the dink pattern.",
    steps: ["Player A maintains a cross-court dink pattern — slowly widening the angle","Player B watches at the kitchen corner, weight on outside foot","When a ball drifts within Erne range, B steps around and executes","A continues dinking on a reset — no break in the drill","Count: how many Erne opportunities arise in 3 minutes?"],
    progressions: [
      { label: "Foundation", desc: "A feeds wide balls on command every 4th dink — predictable setup for B" },
      { label: "Build", desc: "A widens the angle naturally over time — B must read the drift without a signal" },
      { label: "Challenge", desc: "A has the option to go wide OR change to down-the-line — B must read and decide: Erne or stay?" }
    ],
    errors: [
      { mistake: "Player B moving too early — A redirects to the open court", fix: "\"Stay glued to your corner until the ball passes the center of the court.\"" },
      { mistake: "Erne contact too low — ball into net", fix: "\"Get your paddle up early. Contact at or above net tape — punch down.\"" }
    ],
    filler: "If time: Erne vs. Down-the-Line — A tries to exploit B's Erne position with a redirect; B tries to Erne anyway. Live battle."
  }},
          { time:"40–52", icon:"🎯", label:"The Fake Speed-Up", type:"skill", desc:"Wind up as if attacking — opponent flinches or blocks early — redirect into the open court instead. Requires full commitment on the swing fake", guide: {
    setup: "Coach explains the fake: same wind-up and shoulder turn as a speed-up, but at last moment, decelerate and dink or redirect softly. Works when opponent pre-flinches or shifts paddle early.",
    steps: ["From kitchen: execute the full wind-up for a speed-up — shoulder turn, compact backswing","Watch opponent's reaction — do they flinch or move paddle?","If yes: decelerate at contact, push a soft dink to the vacated space","If no: commit to the real speed-up","Key: the fake is only valuable if opponent is reading your body language"],
    progressions: [
      { label: "Foundation", desc: "Isolate the fake: wind up fully, then dink softly. Practice the deceleration motion 10 times each side" },
      { label: "Build", desc: "Live dinking with occasional fakes — partner must react. Count fake-induced errors" },
      { label: "Challenge", desc: "Mix real speed-ups and fakes unpredictably — partner earns a point every time they read the fake correctly" }
    ],
    errors: [
      { mistake: "Fake telegraphed by different grip or stance — opponent reads it", fix: "\"Identical setup, every time. The only difference is the last 6 inches of swing.\"" },
      { mistake: "Fake dink going into net — decelerating too early", fix: "\"Keep forward motion. Just reduce pace, don't stop the swing.\"" }
    ],
    filler: "If time: Fake or Real guessing game — one player calls 'fake' or 'real' before contact. Score 10 reads each."
  }},
          { time:"52–68", icon:"🏓", label:"Dink-to-Attack Sequencing", type:"drill", desc:"Structured rally: 6 dinks, then one player attacks. Rotate who attacks. Debrief: was the attack at the right height?", guide: {
    setup: "Structured rally: 6 dinks required before anyone can attack. The 7th+ ball is a live attack opportunity. Forces patience and deliberate decision-making on attack triggers.",
    steps: ["Both players dink cooperatively — count out loud to 6","On ball 7 or later: either player may speed up if they have a float","If no float materializes, keep dinking — don't force it","After each point: debrief — was the attack the right choice? Was the trigger valid?","Rotate who initiates the 6-count"],
    progressions: [
      { label: "Foundation", desc: "8-dink minimum — very conservative. Focus on pattern recognition" },
      { label: "Build", desc: "6-dink minimum — standard drill. Attack must be on a float or above-tape ball" },
      { label: "Challenge", desc: "4-dink minimum — more pressure to read fast. Fake speed-ups allowed" }
    ],
    errors: [
      { mistake: "Attacking on ball 3 — ignoring the count", fix: "\"Enforce the count. Reset the rally if attack comes before the minimum.\"" },
      { mistake: "No one attacking even on floats — passive play", fix: "\"After 10 dinks, one player MUST attack on the next float. No exceptions.\"" }
    ],
    filler: "If time: Competitive sequencing — track who makes the correct attack/no-attack decision. Coach observes and scores."
  }},
          { time:"68–82", icon:"🏆", label:"Competitive Games — Dink Pattern Focus", type:"game", desc:"Games to 11. Coach observes Erne attempts, fake speed-ups, and attack selection", guide: {
    setup: "Games to 11 — full competitive format. Erne attempts earn a bonus point whether successful or not (reward the attempt). Coach tracks Erne setups and fake speed-up reads.",
    steps: ["Play full points — normal rules","Coach watches kitchen exchanges for Erne opportunities and calls them out ('Erne setup!')" ,"Bonus tracking: Erne attempt = 1pt, successful Erne = 2pt","Debrief after each game: who found the best attack trigger? Who used the fake effectively?","Rotate opponents every game"],
    progressions: [
      { label: "Foundation", desc: "No bonus system — just emphasize pattern play and patience" },
      { label: "Build", desc: "Erne attempt bonus — incentivize trying it" },
      { label: "Challenge", desc: "Dink-first rule: any speed-up before 4 dinks = loss of point. Forces sequencing" }
    ],
    errors: [
      { mistake: "Players abandoning dink strategy when down points — reverting to power", fix: "\"Stick to the pattern. Losing 3-8 on a dink-focused strategy is still learning.\"" },
      { mistake: "Erne attempts at inopportune moments — when ball is not wide", fix: "\"Erne is only for wide balls. If you step and the ball isn't wide — you just left your court open.\"" }
    ],
    filler: "If time: 1v1 dink battle — no overhead, no drives, no lobs. Pure kitchen skill for 3 minutes."
  }},
          { time:"82–90", icon:"💬", label:"Debrief", type:"cool", desc:"Review Erne attempts: what triggered it? When did the fake speed-up work? Coach highlights 2–3 best sequences" }
        ],
        objectives: [
          "Recognize and execute an Erne when a wide dink opportunity appears",
          "Use a fake speed-up to create an open-court redirect opportunity",
          "Apply a structured dink pattern with a pre-planned attack trigger",
          "Build patience in the kitchen rally while maintaining offensive intent"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cones for Erne zone markers"],
        coachTip: "At Level 3, players have solid fundamentals — the challenge is decision quality and offensive creativity. Reward Erne attempts even when they fail. The willingness to try creates the threat that disrupts opponents.",
        cues: [
          { label:"Erne trigger", text:"Opponent dinks short and wide, pulling you to the corner" },
          { label:"Erne footwork", text:"Step or jump so BOTH feet clear NVZ before contact" },
          { label:"Erne contact", text:"Punch volley — no backswing, all timing" },
          { label:"Fake speed-up", text:"Full windup commitment → redirect to open court when opponent flinches" },
          { label:"Attack trigger", text:"Any ball above net height with room to swing (6th dink+)" }
        ],
        youtube: [
          { title:"The Erne Shot — Advanced Execution", sub:"Setup, footwork, NVZ rule, legal contact", url:"https://www.youtube.com/watch?v=XrVpUN9Yqr4" },
          { title:"The Only Way to Attack in Pickleball", sub:"Pickleball Studio", url:"https://www.youtube.com/watch?v=deW8Tw-_C3A" },
          { title:"Dink Sequencing & Attack Triggers at 3.5–4.0", sub:"Structured dink patterns, creating the attack", url:"https://www.youtube.com/watch?v=oJaa2UZsk30" }
        ]
      },
      {
        num: 2,
        priority: "Both partners complete a full serving-side and return-side stack sequence without being prompted.",
        complexity: true,
        title: "Full Stacking System",
        subtitle: "Full Stack & Switch · Half Stack · Poach Signals & Movement",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Footwork Warm-Up", type:"warmup", desc:"Lateral slides, split-step drills, diagonal sprint patterns. Stacking requires fast position switching" },
          { time:"10–25", icon:"🎯", label:"Full Stack — Serving Side", type:"skill", desc:"Both players line up on the same side before serve. Server hits, both players slide into preferred positions. Signal system: hand signal or verbal call", guide: {
    setup: "Coach walks through the serving-side stack with two volunteers. Draw foot positions on court with a cone. Both players line up same side before serve. After serve, slide to preferred positions.",
    steps: ["Both players start right of center (or left — pre-decided)","Server steps to serve from the correct court (can be tricky with stacking — check foot position)","Immediately after serve crosses net: both players slide to their preferred sides","Server goes to their preferred side (e.g., left), partner goes right","Both reach kitchen as opponent returns and the 3rd shot is hit","Call the sides out loud during the walk-through"],
    progressions: [
      { label: "Foundation", desc: "Walk-through at 0% speed — no ball. Just feet. Repeat 5 times." },
      { label: "Build", desc: "Half speed with serve only — stop after slide to check positions" },
      { label: "Challenge", desc: "Full speed stacking: serve → slide → 3rd shot before reaching kitchen" }
    ],
    errors: [
      { mistake: "Server stepping out of bounds serving from stacked position", fix: "\"Check your service foot. You can still serve cross-court from that position — just reach.\"" },
      { mistake: "Sliding before serve clears the net — leaving court open", fix: "\"Ball crosses net, THEN you move. Not one frame earlier.\"" }
    ],
    filler: "If time: stacking speed challenge — time how fast pair can reach preferred positions after serve. Best time wins."
  }},
          { time:"25–38", icon:"🎯", label:"Full Stack — Returning Side", type:"skill", desc:"Non-returning partner stands at the net same side as returner. After the return, both slide into position", guide: {
    setup: "Coach demos return-side stack: non-returner stands at the net on the same side as the returner (not across). After the return, both slide to preferred positions.",
    steps: ["Non-returner: stand at the kitchen on the SAME side as returning partner — not the normal opposite side","Returner: return deep, then move to preferred side","Non-returner: slides to their preferred side after return crosses net","Both are now in preferred positions for the 3rd shot and beyond","Key: non-returner must NOT poach before return lands"],
    progressions: [
      { label: "Foundation", desc: "Walk-through return-side only — no actual return. Just positioning and slides." },
      { label: "Build", desc: "Live return-side: non-returner at net, returner returns, both slide" },
      { label: "Challenge", desc: "Combine serving + return side stacking in the same game — both teams stack every point" }
    ],
    errors: [
      { mistake: "Non-returner standing at normal position (wrong side) out of habit", fix: "\"Pre-game agreement: say out loud 'I'm on your side today.' Remind each other every game.\"" },
      { mistake: "Non-returner poaching the return — fault", fix: "\"You cannot touch the return before it bounces. Wait for your partner's return to clear.\"" }
    ],
    filler: "If time: return-side stacking quiz — coach asks pairs to walk through without prompting. Coaches scores 1pt per correct step."
  }},
          { time:"38–55", icon:"🏓", label:"Stacking Position Drill", type:"drill", desc:"Walk-through at half speed. Coach calls 'serve side' or 'return side.' Pairs practice sliding into correct positions. 10 reps each side, then game speed", guide: {
    setup: "Two pairs: one pair stacks every point (both sides), one pair plays normal. After 5 points switch. Compare: how did stacking change court control and position?",
    steps: ["Stacking pair: agree on preferred sides before drill starts","Execute full stack — serve side and return side — on every point","Normal pair: play standard positions","After 10 points total: debrief — where did the stack help? Where did it break down?","Switch and repeat"],
    progressions: [
      { label: "Foundation", desc: "Stack serve side only — simpler version" },
      { label: "Build", desc: "Stack both sides — full system" },
      { label: "Challenge", desc: "Stack under pressure: coach calls 'scramble' mid-point — both players must sprint to a new preferred position" }
    ],
    errors: [
      { mistake: "Pair arguing about who goes where mid-point", fix: "\"Pre-agreed sides, non-negotiable. Left player stays left, right stays right. No discussion mid-rally.\"" },
      { mistake: "Sliding so far it opens a gap down the middle", fix: "\"You don't need to reach the sideline. Center-of-your-zone is enough.\"" }
    ],
    filler: "If time: 'Stacking relay' — coach calls 'switch sides!' mid-rally. Pairs must adjust preferred positions on the fly."
  }},
          { time:"55–65", icon:"🎯", label:"Poach Signals & Timing", type:"skill", desc:"Pre-set poach signals (open hand = poach next ball, closed fist = stay). Poacher moves on opponent's paddle contact — not after the ball crosses the net", guide: {
    setup: "Coach explains pre-set signals: open hand behind back = I'm poaching next ball, closed fist = stay. Poacher must cross early — not mid-flight of the ball. Partner covers the poacher's vacated side.",
    steps: ["Before serve or return: net player signals behind back","Serving team: net player signals to partner after the serve","If signal = poach: net player cross-steps to intercept the return direction","Non-signaling partner: immediately shifts to cover the vacated zone","Call 'Switch!' as poach happens so partner knows to cover"],
    progressions: [
      { label: "Foundation", desc: "Practice signals only — no live play. Net player signals, both players shadow the movement" },
      { label: "Build", desc: "Live drill: net player signals before each point. Pair executes signal. 50% poach, 50% stay" },
      { label: "Challenge", desc: "Signals hidden from opponents — can they read the poach in time to redirect?" }
    ],
    errors: [
      { mistake: "Poacher moving too late — reacting to the ball instead of the signal", fix: "\"Poach is a commitment BEFORE the ball is hit. If you're reacting to the ball, you're too late.\"" },
      { mistake: "Partner not covering the vacated zone — two players on one side", fix: "\"When you see 'poach' signal: already start sliding to cover. Don't wait for the poach to happen.\"" }
    ],
    filler: "If time: signals-only game — every point must have a pre-set signal. Coach observes execution and coverage."
  }},
          { time:"65–75", icon:"🏓", label:"Live Poach Drill", type:"drill", desc:"Partner feeds dinks to one player. Other player poaches on signal from coach. Non-poaching player covers the vacated court immediately", guide: {
    setup: "Full 4-player setup. One team stacks and uses signals. Other team plays normal. Poaching team signals before every point — coach calls whether the poach was the right call.",
    steps: ["Net player signals to partner (open/closed) before serve","On poach signal: net player cross-steps, partner covers vacated side","On stay signal: normal positioning — no movement","Play point out after signal is executed","Coach debrief: was the poach signal read correctly by the poacher? Did partner cover?"],
    progressions: [
      { label: "Foundation", desc: "Signal is announced out loud ('poaching!') — full transparency for learning" },
      { label: "Build", desc: "Silent signals — hand only" },
      { label: "Challenge", desc: "Opposing team is told to watch for signals and exploit the poach — forces better timing" }
    ],
    errors: [
      { mistake: "Poacher crossing but not reaching the ball — momentum wasted", fix: "\"Only poach if you can intercept. Wide poaches that miss just give opponent the open court.\"" },
      { mistake: "Both players going for the poach — nobody covers", fix: "\"One signals, one covers. Always. The other partner holds until the poach is done.\"" }
    ],
    filler: "If time: 'Poach or Pass' — coach calls 'poach!' during the live rally. Net player must react in that moment. Reflex training."
  }},
          { time:"75–85", icon:"🏆", label:"Stacking Games", type:"game", desc:"Games to 11. Both teams must stack every point. Coach watches signal execution, slide timing, and poach coverage", guide: {
    setup: "Games to 11. Both teams must stack every point — no exceptions. If a pair forgets to stack, coach calls 'Stack!' and they lose the point. Consistent enforcement.",
    steps: ["Pre-game: both pairs confirm preferred sides out loud","Every serve: serving pair stacks before contact","Every return: returning pair executes return-side stack","Coach watches for slides, timing, and coverage","Debrief after each game: what broke down? When did the stack give an advantage?"],
    progressions: [
      { label: "Foundation", desc: "One team stacks, one doesn't — compare court positions throughout" },
      { label: "Build", desc: "Both teams stack — full system required" },
      { label: "Challenge", desc: "Add poach signals: both teams stack AND signal every point. Maximum complexity" }
    ],
    errors: [
      { mistake: "Teams stopping the game to argue about positioning", fix: "\"Play it out, then debrief. Never stop the rally to discuss — that's what the debrief is for.\"" },
      { mistake: "Stacking becoming mechanical — losing awareness of the ball", fix: "\"Stacking is automatic, not mindful. Like driving a car — you stop thinking about it eventually.\"" }
    ],
    filler: "If time: 'Memory Stacking' — play 2 games back-to-back with no coaching cues. How long before the stacking breaks? Track the point."
  }},
          { time:"85–90", icon:"💬", label:"Debrief", type:"cool", desc:"Where did the stack break down? When did the poach succeed? Partners discuss and decide their team's stacking plan" }
        ],
        objectives: [
          "Execute a full stack on both serve and return side with correct slide timing",
          "Use a pre-set signal system to coordinate poaches with a partner",
          "Cover the court after a partner poaches without hesitation",
          "Understand when stacking is a strategic advantage vs. unnecessary complexity"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net"],
        coachTip: "Stacking only works when both players are truly committed to the system. One hesitation ruins the coverage. Spend time on the communication around stacking — the physical movement is simple once the signals are automatic.",
        cues: [
          { label:"Why stack", text:"Gives both players their dominant forehand on preferred side" },
          { label:"Signal rule", text:"Signal before EVERY point — never assume your partner knows" },
          { label:"Slide timing", text:"Move on your partner's contact, not after the bounce" },
          { label:"Poach rule", text:"Poacher moves on opponent's paddle contact; non-poacher covers vacated half immediately" }
        ],
        youtube: [
          { title:"Full Stacking System — Serve & Return", sub:"Complete stacking guide, serving and returning sides", url:"https://www.youtube.com/watch?v=7cQYyT3rPnA" },
          { title:"Poaching — Signals & Timing", sub:"Pre-set poach signals, when to poach, coverage after", url:"https://www.youtube.com/watch?v=sZlgYm6yUlY" },
          { title:"Half Stack — When & How to Use It", sub:"Simpler positioning adjustment mid-match", url:"https://www.youtube.com/watch?v=hWCrs_I7YXo" }
        ]
      },
      {
        num: 3,
        priority: "Every player chains one speed-up into a counter into a re-attack in a live point.",
        title: "Aggressive Net Play",
        subtitle: "Volley Put-aways · Speed-up Chains · Closing the Net",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Rapid-Fire Volley Warm-Up", type:"warmup", desc:"Pairs at kitchen line, rapid-fire volleys as fast as possible without missing. Goal: 20 consecutive. Builds hand speed and paddle-up habit" },
          { time:"10–22", icon:"🎯", label:"Volley Put-away Mechanics", type:"skill", desc:"High ball at kitchen = immediate volley put-away. Contact in front, punch angle downward past opponent's feet. Aim through the player. Common error: over-hitting instead of angling", guide: {
    setup: "Coach at kitchen line with a hopper. Tosses high balls at varying positions — player executes volley put-away to a target corner. Emphasize contact in front, angle down.",
    steps: ["Ball is at or above net height at kitchen — put-away opportunity","Compact swing: elbow up, contact in front of lead shoulder","Angle the paddle face down and across (cross-court or down-the-line)","Punch through the ball — don't decelerate","Land ball at opponent's feet or into the open corner","Reset to ready position immediately"],
    progressions: [
      { label: "Foundation", desc: "Coach tosses from 3 feet away — slow and high. Player aims at a cone in each corner" },
      { label: "Build", desc: "Coach tosses from 10 feet at rally speed — player reads trajectory and angles" },
      { label: "Challenge", desc: "Coach calls the target corner as the ball is in the air — player must redirect" }
    ],
    errors: [
      { mistake: "Contacting ball beside or behind lead shoulder — no angle", fix: "\"Front foot forward. If the ball reaches your ear, you're too late.\"" },
      { mistake: "Put-away going out or into net — overswinging", fix: "\"70% swing, 100% angle. The angle wins, not the pace.\"" }
    ],
    filler: "If time: Put-away Accuracy Challenge — 5 balls each, must land in designated target zone. Who converts 4/5?"
  }},
          { time:"22–38", icon:"🏓", label:"Put-away Angle Drill", type:"drill", desc:"Coach tosses high balls at varying positions along the kitchen. Player angles each put-away to a cone target on the opposite side", guide: {
    setup: "Player at kitchen. Coach tosses high balls to 5 positions along the kitchen line (far left, center-left, center, center-right, far right). Player puts away to opposite cross-court corner each time.",
    steps: ["Coach labels 5 positions: 1 (far left) through 5 (far right)","Player starts center and must move to position as ball is tossed","Put-away to the opposite cross-court corner from contact point","Track: which positions produced the best angle? Which was hardest?","Rotate through all 5 positions twice"],
    progressions: [
      { label: "Foundation", desc: "Coach tosses to same position 5 times — player masters that angle before moving on" },
      { label: "Build", desc: "Random positions — player must move and adjust angle each shot" },
      { label: "Challenge", desc: "Coach calls target corner ('left corner!' or 'right corner!') mid-toss — player redirects" }
    ],
    errors: [
      { mistake: "Ball going straight regardless of contact position — no angle adjustment", fix: "\"The angle changes with your position. Left side of court → aim right corner. Always.\"" },
      { mistake: "Rushing the put-away — off-balance contact", fix: "\"Feet first, then swing. Get to the ball, pause for a split second, then punch.\"" }
    ],
    filler: "If time: live put-away rally — both players at kitchen, trying to put away any high ball. First to 10 put-away winners wins."
  }},
          { time:"38–50", icon:"🎯", label:"Speed-Up Chains", type:"skill", desc:"Chain: speed-up → counter → re-speed-up. Staying offensive even when countered. Key: maintain compact swing on each exchange", guide: {
    setup: "Coach introduces the chain concept: speed-up → counter → re-speed-up. Most players stop at one speed-up. Advanced play continues the chain until someone loses control. Demo a 3-touch chain.",
    steps: ["Player A speeds up cross-court","Player B counters with a compact block redirect","Player A receives the block and immediately re-speeds-up","Player B must counter again — or concede if they can't reach","Chain ends when someone misses or ball pops up too high for safe attack","Count chain length — 3-touch is good, 5-touch is excellent"],
    progressions: [
      { label: "Foundation", desc: "2-touch chain only: A speeds up, B counters, stop and reset. Build the pattern." },
      { label: "Build", desc: "3-touch chain: A → B → A. Coach counts chain length" },
      { label: "Challenge", desc: "Open-ended chain: keep going until someone misses. No predetermined end" }
    ],
    errors: [
      { mistake: "Chain broken by a dink instead of counter — player retreats to safety", fix: "\"Commit to the chain. Dinking out of a speed-up exchange is losing the point in slow motion.\"" },
      { mistake: "Re-speed-up going out — overswinging on second attack", fix: "\"Shorten the backswing on the re-attack. The pace is already built in from the counter.\"" }
    ],
    filler: "If time: Chain record challenge — who can build the longest clean chain? Coach referee counts."
  }},
          { time:"50–65", icon:"🏓", label:"Chain Exchange Drill", type:"drill", desc:"Both players at kitchen. Player A speeds up, Player B counters, Player A re-attacks. Play out until someone errors. 3 sets each. Goal: sustain 3-shot chains", guide: {
    setup: "Both players at kitchen line. Player A initiates speed-up. Player B counters. A re-attacks. Continue. Coach counts chain length. First to miss loses the round.",
    steps: ["Player A speeds up at B's body or shoulder — initiates chain","Player B counters with soft redirect — redirects to A's body","Player A re-attacks — no reset allowed","Continue chain until error — coach calls the chain length","Winner: who misses first? Rotate and repeat"],
    progressions: [
      { label: "Foundation", desc: "Both at 60% pace — build the chain pattern without errors from pace" },
      { label: "Build", desc: "Full pace — chain at realistic speed. Counts as a 3+ chain minimum" },
      { label: "Challenge", desc: "Movement added: after each exchange, both players shuffle 1 step laterally — wider contact points" }
    ],
    errors: [
      { mistake: "Counter going too high — opponent puts it away instead of continuing chain", fix: "\"Low counter: aim at their feet, not their shoulder. High counter = their easy put-away.\"" },
      { mistake: "Losing track of the chain because both players are just hitting hard", fix: "\"Slow it down: the chain is a skill, not a brawl. Control beats power in chains.\"" }
    ],
    filler: "If time: 'Chain Survivor' — last pair standing with the longest chain in 5 minutes wins."
  }},
          { time:"65–72", icon:"🎯", label:"Closing the Net", type:"skill", desc:"After forcing a weak ball, both partners step inside the NVZ to cut off angles. Timing: step in as opponent contacts the ball, not after it crosses", guide: {
    setup: "Coach explains the 'step inside' concept: after forcing a weak ball (pop-up or soft return), both partners step 6–12 inches inside the NVZ line to cut off cross-court and straight angles simultaneously.",
    steps: ["Identify a weak ball — opponent's forced reset or pop-up","Signal partner: 'Step in!' before the put-away","Both step inside the NVZ line simultaneously","Execute put-away from the compressed position","Hold the forward position until the point ends or opponent gets past you"],
    progressions: [
      { label: "Foundation", desc: "Practice step-in movement only — no live ball. Coach says 'step!' and both players step forward together" },
      { label: "Build", desc: "Live point: coach calls 'step!' when a weak ball appears — pair must step and put away" },
      { label: "Challenge", desc: "Pair self-identifies the step-in moment without coach prompting" }
    ],
    errors: [
      { mistake: "Only one player stepping in — other stays back", fix: "\"Both or neither. One player stepping in and one holding creates a gap.\"" },
      { mistake: "Stepping in too early — opponent lobs over both players", fix: "\"Step in on a WEAK ball, not just any ball. If they're steady, stay at the line.\"" }
    ],
    filler: "If time: 'Net Compression Drill' — coach tosses weak balls randomly, pair must step in and put away within 2 shots. Track success rate."
  }},
          { time:"72–85", icon:"🏆", label:"Aggressive Games", type:"game", desc:"Games to 11. Players are encouraged to attack first — no passive play. Coach tracks put-aways and speed-up chains", guide: {
    setup: "Games to 11. Rule: if your team wins a rally with a speed-up chain of 3+ touches, earn 2 bonus points. Coach counts chains and calls 'Chain 3!' when threshold is hit.",
    steps: ["Play normal games — full rules apply","Coach watches kitchen exchanges and counts chain touches","On a 3+ chain that wins the point: 2 bonus points awarded","Debrief after each game: which chains worked? Which broke down?","Rotate opponents every game — different chain styles to adapt to"],
    progressions: [
      { label: "Foundation", desc: "No bonus system — just play aggressively and practice speed-up initiation" },
      { label: "Build", desc: "Chain bonus tracking — incentivize building chains" },
      { label: "Challenge", desc: "Closing-net rule: after every successful chain, pair must step inside the NVZ for 3 seconds or lose the bonus" }
    ],
    errors: [
      { mistake: "Players not initiating chains — passive kitchen play", fix: "\"You need 10 games to get good at chains. You can only get those games by trying.\"" },
      { mistake: "Chains getting sloppy — errors from overaggression", fix: "\"Every chain starts with a controlled speed-up, not a panic swing. Set it up properly.\"" }
    ],
    filler: "If time: 'Aggression Ladder' — one team plays aggressively while the other defends. Switch. Who's more effective?"
  }},
          { time:"85–90", icon:"💬", label:"Debrief", type:"cool", desc:"Where did chains break? When was the put-away the wrong choice vs. re-dinking?" }
        ],
        objectives: [
          "Convert high balls into put-away winners with precision angle control",
          "Sustain 2–3 shot speed-up chains without losing control",
          "Step inside the NVZ to close angles after forcing a weak return",
          "Balance offensive aggression with smart reset decisions"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cone put-away targets"],
        coachTip: "At 3.5–4.0, unforced errors from over-aggressive put-aways are more common than missed opportunities. Coach the angle first, then the pace. A slow angled put-away beats a hard flat one straight at an opponent every time.",
        cues: [
          { label:"Put-away angle", text:"Ball right → crosscourt left | Ball left → crosscourt right | Ball center → non-paddle shoulder" },
          { label:"Follow through", text:"Drive the ball down, not flat — reduces net errors" },
          { label:"Chain mechanics", text:"Compact swing on every shot in the chain — no windup after the first" },
          { label:"Closing net", text:"Step in as opponent contacts the ball — not after it crosses" }
        ],
        youtube: [
          { title:"Volley Put-Aways — Angle & Control", sub:"Pickleball Effect", url:"https://www.youtube.com/watch?v=r-YsJUwYne0" },
          { title:"3 Speedup/Counter Combinations", sub:"Pickleball 411", url:"https://www.youtube.com/watch?v=Bs3qvIaDF48" },
          { title:"Closing the Net — Step-in Timing", sub:"Cutting off opponent angles by stepping inside NVZ", url:"https://www.youtube.com/watch?v=SJCyFWJV350" }
        ]
      },
      {
        num: 4,
        priority: "Every player has a named go-to serve and a named pressure serve — and executes both on call.",
        title: "Serve Weaponization",
        subtitle: "Topspin Serve · Slice Serve · Body Serve & Serve +1 Patterns",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Serve Groove Warm-Up", type:"warmup", desc:"15 serves at 70% effort. No spin yet — establish rhythm, contact point, and release. Confirm every player is serving with a legal underhand motion before adding spin" },
          { time:"10–25", icon:"🎯", label:"Topspin Serve", type:"skill", desc:"Brush up and over the ball at contact — creates heavy topspin that dips and kicks up off the bounce. Wrist acceleration through the ball. Forces returner to hit up, producing a weak short return", guide: {
    setup: "Coach demos topspin serve mechanics: brush UP the back of the ball at contact — low to high swing path. Ball kicks high off the bounce. Target: deep service box with heavy kick.",
    steps: ["Grip: continental or slightly eastern — same as normal serve","Stance: open or semi-open, weight on back foot","Ball toss: slightly in front and low (knee height or below — pickleball serve rule)","Swing low-to-high: contact at the equator, brush up through the ball","Follow through up and across — finish high","Sound of contact: dull thud vs. normal flat pop — listen for it"],
    progressions: [
      { label: "Foundation", desc: "10 practice serves at 50% pace — just find the brush-up contact. Don't worry about where it lands." },
      { label: "Build", desc: "Target deep ¾ of service box. 15 serves: how many land in target with visible kick?" },
      { label: "Challenge", desc: "Vary spin level: 30%, 60%, 90%. Partner calls spin amount after bounce" }
    ],
    errors: [
      { mistake: "Swing path too horizontal — no topspin, just a flat serve", fix: "\"Think of brushing a wall from floor to ceiling. Vertical swing, not horizontal.\"" },
      { mistake: "Ball floating short — landing in front half of service box", fix: "\"Add a few more degrees of forward lean on your swing path. Angle it toward the target.\"" }
    ],
    filler: "If time: topspin vs. flat comparison — serve 5 topspin, 5 flat. Partner describes the bounce difference. Can they identify each?"
  }},
          { time:"25–38", icon:"🏓", label:"Topspin Serve Drill", type:"drill", desc:"20 topspin serves each. Target: deep ¾ of the service box. Listen for the 'kick' sound on partner's return. Video self-check recommended", guide: {
    setup: "Players serve 20 topspin serves each. Target: a hula hoop or cone zone in the back ¾ of the service box. Partner calls 'kick' (heavy spin), 'medium', or 'flat' based on bounce.",
    steps: ["Serve 5 warm-up serves — no target pressure","Then 20 topspin serves at full target intent","Partner calls bounce quality after each: kick / medium / flat","Score: 1pt per landing in zone, 1pt per 'kick' call","Target: 12/20 in zone, 8/20 with visible kick"],
    progressions: [
      { label: "Foundation", desc: "Serve to either side of the service box — just get it in with topspin" },
      { label: "Build", desc: "Specific target (deep backhand corner). Both landing and spin scored" },
      { label: "Challenge", desc: "Partner returns the topspin serve — server must adapt serve to make return harder" }
    ],
    errors: [
      { mistake: "Consistent faults — serve going long or into net", fix: "\"Topspin has natural dip — it should help with net clearance. Check your ball toss isn't too high.\"" },
      { mistake: "Partner can't distinguish topspin from flat — no real spin generated", fix: "\"Exaggerate the brush. Really sweep up the back of the ball. Feel the difference in your forearm.\"" }
    ],
    filler: "If time: topspin serve challenge — 5 serves each, deepest average landing wins. Measure from the baseline."
  }},
          { time:"38–50", icon:"🎯", label:"Slice Serve", type:"skill", desc:"Cut across the ball — creates sidespin that skids low and wide after the bounce. Especially effective to the backhand corner. Combine with deep topspin to prevent opponents from reading serve", guide: {
    setup: "Coach demos slice serve: cut across and under the ball — creates sidespin and skid. Ball stays low and kicks wide after bounce, instead of up. Opposite mechanic to topspin.",
    steps: ["Grip: continental — same as topspin","Swing path: high to low, angled across the ball from right to left (for righties)","Contact: paddle cuts outside-in across the ball — feel the 'slice' sound","Ball stays low in the air and skids wide after bounce","Target: wide sideline or deep body position","Most effective when mixed with topspin — opponent can't groove to one bounce"],
    progressions: [
      { label: "Foundation", desc: "10 slice serves at 50% — just find the skid contact. Partner watches the bounce direction." },
      { label: "Build", desc: "Target: wide sideline cone. 15 serves — how many force a wide step from partner?" },
      { label: "Challenge", desc: "Mix 2 topspin + 1 slice in sequence — partner must adjust return footwork each time" }
    ],
    errors: [
      { mistake: "Slice going into the net — too steep downward", fix: "\"Keep the paddle moving across, not down. The cut is horizontal, not a chop.\"" },
      { mistake: "No sideway kick — serve lands flat", fix: "\"The swing must cross outside the ball. Think of wiping a car window from inside to outside.\"" }
    ],
    filler: "If time: slice target challenge — wide serve must force opponent to step outside the doubles sideline to return. Count successes."
  }},
          { time:"50–62", icon:"🏓", label:"Spin Mix Drill", type:"drill", desc:"Alternate: topspin, slice, flat, body serve in sequence. Partner calls which serve they think it is after each. Builds serve disguise", guide: {
    setup: "Player serves in a 4-serve sequence: topspin, slice, flat, body serve. Partner must call the type after the bounce — not at contact. Tests disguise quality.",
    steps: ["Server commits to a sequence: T / S / F / B (topspin, slice, flat, body)","Serves each in order — same setup and stance each time","Partner at baseline calls serve type after bounce: 'Topspin!', 'Slice!', 'Flat!', 'Body!'","Compare calls to actual sequence — how many were identified?","Score: partner gets 1pt per correct read, server gets 1pt per misread"],
    progressions: [
      { label: "Foundation", desc: "Server announces serve type before hitting — partner watches the mechanics to learn visual cues" },
      { label: "Build", desc: "No announcement — partner must read from bounce. Standard challenge" },
      { label: "Challenge", desc: "Random sequence — server decides each serve 1 second before hitting. No pre-plan." }
    ],
    errors: [
      { mistake: "Partner correctly guessing every serve — serve is telegraphed at contact", fix: "\"Same stance, same toss, same backswing — only the wrist and swing path differ at the last moment.\"" },
      { mistake: "Server loses track of sequence — breaks the pattern", fix: "\"Write TSFB on your palm. Glance before each serve.\"" }
    ],
    filler: "If time: 'Spin Auction' — partner bets 1-3 points on their certainty level before calling. High-confidence wrong = big loss."
  }},
          { time:"62–72", icon:"🎯", label:"Serve +1 Patterns", type:"skill", desc:"Serve placement sets up your 3rd shot. Wide serve → opponent returns crosscourt → your 3rd shot drop is predictable. Body serve → short return → opportunity to drive or attack", guide: {
    setup: "Coach explains serve + 1 patterns: your serve placement sets up your 3rd shot. Wide serve → opponent returns crosscourt → your 3rd shot goes to their backhand. Map it out on a whiteboard.",
    steps: ["Pattern 1 — Wide Serve: Serve wide forehand → opponent returns cross → drop to their backhand corner","Pattern 2 — Body Serve: Serve at shoulder → cramped return lands center → drop to wide open court","Pattern 3 — Deep Backhand: Force a weak return → recognize which side it comes back to → drive or drop accordingly","Practice each pattern 5 times as a sequence — serve, observe return, execute 3rd shot","Coach confirms: does the return go where the pattern predicted?"],
    progressions: [
      { label: "Foundation", desc: "Partner feeds a predictable return where the pattern dictates — server just practices the 3rd shot" },
      { label: "Build", desc: "Live serve + return: server executes the serve pattern, partner returns naturally, server reads and responds" },
      { label: "Challenge", desc: "Partner intentionally breaks the expected return pattern — server must adapt 3rd shot in real time" }
    ],
    errors: [
      { mistake: "Player executing a pattern serve then ignoring the return", fix: "\"The serve is step 1 of 3. You're creating a setup, not just serving.\"" },
      { mistake: "Trying to memorize too many patterns — execution paralysis", fix: "\"Pick ONE pattern as your go-to. Master it before adding others.\"" }
    ],
    filler: "If time: 'Pattern Predict' — server calls their pattern out loud before serving. Does it play out? Partner confirms."
  }},
          { time:"72–85", icon:"🏆", label:"Serve Strategy Games", type:"game", desc:"Games to 11. Each server must call their intended serve and placement before the point. Post-game: which serve generated the weakest returns?", guide: {
    setup: "Games to 11. Before each serve, server calls their spin and target out loud. If they execute their called serve (partner confirms), they earn a bonus point even if they lose the rally.",
    steps: ["Server calls: 'Topspin to backhand corner' or 'Slice wide' — must specify both spin and location","Server executes the serve","Partner at baseline confirms: 'Yes' or 'No' for accuracy","Bonus point awarded for correct execution, tracked separately","Rotate every game — coach observes serve variety and pattern usage"],
    progressions: [
      { label: "Foundation", desc: "Call target only — no spin specification" },
      { label: "Build", desc: "Call spin + target both. Bonus for executing either one" },
      { label: "Challenge", desc: "Call a serve + the expected return location + planned 3rd shot. Execute the full pattern" }
    ],
    errors: [
      { mistake: "Players defaulting to the same serve every point — no variety", fix: "\"Rule: no same serve twice in a row. Force variation.\"" },
      { mistake: "Partners disagreeing on whether serve hit the called zone", fix: "\"Use cones for targets. Objective confirmation only.\"" }
    ],
    filler: "If time: 'Serve Poker' — each player has 4 serves: topspin, slice, flat, body. Use each once in a game. Best tactical sequence wins."
  }},
          { time:"85–90", icon:"💬", label:"Debrief", type:"cool", desc:"What's your go-to serve now? What's your pressure serve at 10-10? Each player defines their personal serving strategy" }
        ],
        objectives: [
          "Produce a reliable topspin serve with consistent kick off the bounce",
          "Add a slice serve that curves low to the backhand corner",
          "Mix serve types to prevent opponents from reading your motion",
          "Connect serve placement to a pre-planned 3rd shot pattern (Serve +1)"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cones for target zones"],
        coachTip: "Build consistency first. One well-executed serve beats three different bad ones. Topspin first, then add slice once topspin is reliable. Disguise comes from same motion, different contact angle.",
        cues: [
          { label:"Topspin", text:"Brush up at contact → dips fast, high bounce → forces up return" },
          { label:"Slice", text:"Cut across → skids wide → disrupts footwork and timing" },
          { label:"Body serve", text:"Aimed at returner's hip → jams swing → produces short return" },
          { label:"Serve +1 (wide)", text:"Wide serve → return crosscourt → 3rd drop crosscourt (predictable return location makes drop easier)" },
          { label:"Serve +1 (body)", text:"Body serve → short return → drive down the line" }
        ],
        youtube: [
          { title:"Topspin Serve Tutorial — Change Your Game", sub:"Zane Navratil", url:"https://www.youtube.com/watch?v=R7nOaPqC8Ig" },
          { title:"Slice Serve — Sidespin & Placement", sub:"SpinPro Pickleball", url:"https://www.youtube.com/watch?v=wcZxZOyYN0I" },
          { title:"Serve +1 Patterns — Setting Up Your 3rd Shot", sub:"Connecting serve placement to rally strategy", url:"https://www.youtube.com/watch?v=jbUthAoIrvw" }
        ]
      },
      {
        num: 5,
        priority: "Every player makes at least 3 correct drive vs. drop decisions based on ball height, not habit.",
        complexity: true,
        title: "Transition Game — Drive vs. Drop",
        subtitle: "4th Shot Drive · Midcourt Attack · Drive vs. Drop Decision Making",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Baseline Rally Warm-Up", type:"warmup", desc:"Groundstroke rally at 80% pace. Focus: footwork positioning and ready stance. Transition game starts from the baseline" },
          { time:"10–24", icon:"🎯", label:"The 4th Shot Drive", type:"skill", desc:"Returner hits deep → server drops → returner at net, server's partner drives the 4th shot hard at the net player's feet. Timing: attack before they're set. Requires reading whether the 3rd shot drop is weak", guide: {
    setup: "Coach explains the 4th shot role: if your partner drops (3rd shot) and it lands well, YOU (at the kitchen already) may drive a weak return instead of dropping again. Coordinate with partner.",
    steps: ["Your partner drops from baseline — you're already at kitchen","Watch the server's 3rd shot quality: if drop is high → you attack","If drop is low and good → hold your position and dink","On attack decision: punch drive at server's feet as they advance","Call 'Go!' so partner knows you're driving"],
    progressions: [
      { label: "Foundation", desc: "Partner feeds from baseline (no serve) — kitchen player reads the feed quality and calls 'attack' or 'hold'" },
      { label: "Build", desc: "Live 3rd-shot scenario: server drops, kitchen player reads and responds appropriately" },
      { label: "Challenge", desc: "Full point: server drops, kitchen player drives the 4th, server must reset under pressure" }
    ],
    errors: [
      { mistake: "Kitchen player driving every 3rd shot regardless of quality", fix: "\"Drive only the high drops. A low quality drop gets you in trouble if you drive it.\"" },
      { mistake: "Partner not knowing if kitchen player will drive — confusion", fix: "\"Call it. 'Go!' means drive. Silence means hold. Always verbal.\"" }
    ],
    filler: "If time: 4th Shot Speed Drill — server drops at various heights, kitchen player calls 'attack' or 'hold' before ball bounces. Coach grades reads."
  }},
          { time:"24–40", icon:"🏓", label:"Drive vs. Drop Decision Drill", type:"drill", desc:"Live serve + return sequence. Server drops (varying quality). Returner decides: drive the 4th or continue to kitchen. Coach observes decision quality", guide: {
    setup: "Server serves. Returner returns deep. Server hits 3rd shot (varying quality). Returner makes a live drive-vs-drop decision. Coach observes and calls 'Correct!' or 'Wrong!' based on ball height.",
    steps: ["Server serves — returner returns deep","Server hits a 3rd shot drop — varying quality intentionally (some high, some low)","Returner reads ball height: above waist = drive, below waist = drop","Execute the decision — full rally continues","Coach calls correct/incorrect after each decision point"],
    progressions: [
      { label: "Foundation", desc: "Server announces ball height before hitting ('high!' or 'low!') — returner practices the correct response" },
      { label: "Build", desc: "No announcement — returner reads independently. Coach scores decisions" },
      { label: "Challenge", desc: "Server adds movement: rush to kitchen after the 3rd shot — returner must decide AND aim at feet" }
    ],
    errors: [
      { mistake: "Returner always drops — habitual safety that ignores the decision", fix: "\"If you're always dropping, you're not reading. Force yourself to try the drive on high balls.\"" },
      { mistake: "Returner always drives — aggression without reads", fix: "\"Call the height before you swing. If you can't call it, you're not reading it.\"" }
    ],
    filler: "If time: Decision Speed Test — coach feeds from a basket, calling heights randomly. Player calls + executes in under 1 second."
  }},
          { time:"40–52", icon:"🎯", label:"Midcourt Attack Opportunity", type:"skill", desc:"Ball bounces mid-court above waist height = attack opportunity from the transition zone. Step into the ball, drive crosscourt or at the body. Never attack a ball below the knee from mid-court", guide: {
    setup: "Coach identifies the transition zone attack window: ball bounces mid-court ABOVE waist height = attack from transition (not kitchen). Most players ignore these — they're high-percentage opportunities.",
    steps: ["Ball bounces mid-court (between kitchen and baseline) at or above waist","Split step and read height: above waist → attack","Step into the ball — don't let it drop further","Drive cross-court or at opponent's feet — not a lob","Immediately move toward kitchen after the attack","Don't stay in transition — one shot, then advance"],
    progressions: [
      { label: "Foundation", desc: "Coach feeds mid-court balls at waist height — player reads and attacks each one" },
      { label: "Build", desc: "Mix of low and high mid-court feeds — player must distinguish and respond correctly" },
      { label: "Challenge", desc: "Live rally scenario: player hangs in transition, waiting for the mid-court opportunity, then attacks and advances" }
    ],
    errors: [
      { mistake: "Dropping a ball above waist from mid-court — giving opponent time to reset", fix: "\"That ball is a gift. If you drop it from mid-court they'll just drive it back at you.\"" },
      { mistake: "Attacking mid-court ball and then staying in transition", fix: "\"One shot, then go. You cannot afford to rally from mid-court.\"" }
    ],
    filler: "If time: 'Transition Trigger' — player starts at baseline, rally begins, player identifies and attacks 3 mid-court opportunities before winning the drill."
  }},
          { time:"52–68", icon:"🏓", label:"Midcourt Attack Drill", type:"drill", desc:"Feeder tosses mid-court balls at varying heights. Player reads height → drives if above waist, drops if below. Sharpens the instinct in isolation before applying in live play", guide: {
    setup: "Coach feeds from a hopper at varying heights into the transition zone. Player reads height and attacks (if above waist) or drops (if below). Count correct decisions.",
    steps: ["Coach feeds from baseline into the transition zone — 15 balls per round","Player reads each ball at mid-court: above waist = attack, below = drop","Execute the decision: drive attack or soft drop into kitchen","Coach confirms after each: 'Correct read!' or 'Should have dropped/attacked'","Score: correct decision rate. Target: 11/15 correct"],
    progressions: [
      { label: "Foundation", desc: "Coach feeds predictably: 5 high, 5 medium, 5 low in that order" },
      { label: "Build", desc: "Random mix — player must read each ball independently" },
      { label: "Challenge", desc: "After each attack, player must sprint to kitchen before coach feeds the next ball" }
    ],
    errors: [
      { mistake: "Player calling the height wrong — waist is not their reference", fix: "\"Waist height is where your belt is. Everything above that is green light.\"" },
      { mistake: "Attacks going long — overswinging from transition", fix: "\"Shorter swing from mid-court. You're already mid-court, you don't need full power.\"" }
    ],
    filler: "If time: 15-ball Accuracy Challenge — each player gets a round. Who gets the most correct decisions?"
  }},
          { time:"68–75", icon:"🎯", label:"Transition Zone Patience", type:"skill", desc:"Sometimes the right answer is a 5th shot drop — not the 3rd. If your 3rd shot drop didn't advance you to the kitchen, hit a 5th shot drop and keep working to the net", guide: {
    setup: "Coach explains the 5th shot drop: sometimes your 3rd shot drop lands poorly — opponent attacks it — and now you need a 5th, 7th, or 9th shot drop to finally get to the kitchen. This is normal. Patience wins.",
    steps: ["If your 3rd shot drop is attacked back hard: reset to a 5th shot drop","Don't panic-drive because you're still mid-court","Keep dropping until you earn a soft ball OR reach the kitchen","Watch for the green light: a drop that isn't attacked = advance","Every advance step during a rally is earned, not assumed"],
    progressions: [
      { label: "Foundation", desc: "Cooperative drill: coach keeps driving back until player drops one perfectly — then lets them advance" },
      { label: "Build", desc: "Semi-live: partner at kitchen randomly attacks some drops and lets some pass. Player must read which is which." },
      { label: "Challenge", desc: "Full live: player must advance from baseline to kitchen through a gauntlet of drives. No shortcuts." }
    ],
    errors: [
      { mistake: "Player driving out of frustration after 2 failed drops", fix: "\"The third attempt is often the winner. The first is positioning, the second is setting up, the third is the drop that gets in.\"" },
      { mistake: "Player not advancing at all — staying at baseline indefinitely", fix: "\"After each drop, take a step forward. You're always moving. Even 1 step per drop gets you there.\"" }
    ],
    filler: "If time: 'Patience Game' — point only ends when a player successfully advances from baseline to kitchen during the point. Track who does it most."
  }},
          { time:"75–85", icon:"🏆", label:"Transition-Focused Games", type:"game", desc:"Games to 11. Coach signals drive or drop on specific rallies to force decision-making practice", guide: {
    setup: "Games to 11. Coach signals 'drive' or 'drop' on specific balls during live play — player must execute the called decision instantly. Tests real-time adaptability under match pressure.",
    steps: ["Play normal points","Coach watches transition zone exchanges — calls 'Drive!' or 'Drop!' on specific balls as they arise","Player must execute the call mid-rally (overrides their instinct)","After the point: debrief — was the coach's call the right decision? Why?","Track: how many called decisions were executed correctly?"],
    progressions: [
      { label: "Foundation", desc: "Coach calls only obvious high balls ('Drive!') — easy decisions to build confidence" },
      { label: "Build", desc: "Coach calls both drives and drops — some are unexpected. Player must override habit" },
      { label: "Challenge", desc: "No coach calls — player must self-identify and narrate out loud: 'Drive!' or 'Drop!' before every transition shot" }
    ],
    errors: [
      { mistake: "Player ignoring coach calls — doing their own thing", fix: "\"This drill is about overriding your instinct. The coach call is the point of the drill.\"" },
      { mistake: "Player calling 'drop' or 'drive' but executing the other", fix: "\"Say it, then do it. The verbal call should lock in the decision.\"" }
    ],
    filler: "If time: 'Slow Motion Points' — play at 50% pace and narrate every decision out loud. Make the whole decision process visible."
  }},
          { time:"85–90", icon:"💬", label:"Debrief", type:"cool", desc:"What cues tell you the 3rd shot drop was attackable? Players share their personal drive/drop decision framework" }
        ],
        objectives: [
          "Identify a weak 3rd shot drop and execute a 4th shot drive attack",
          "Read midcourt ball height to decide drive vs. drop in real time",
          "Use a 5th shot drop when the 3rd shot drop didn't advance position",
          "Apply drive/drop decision framework consistently in games"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Cones for midcourt height markers"],
        coachTip: "The most common Level 3 error is driving too many balls from the transition zone out of impatience. The cue to reinforce: 'Is the ball above your waist AND are you balanced?' If either answer is no — drop it.",
        cues: [
          { label:"🟢 Green zone (above waist)", text:"Attack — drive crosscourt or at body" },
          { label:"🟡 Yellow zone (knee to waist)", text:"Judgment call — step in and drive only if balanced" },
          { label:"🔴 Red zone (below knee)", text:"Always drop — never drive from here" },
          { label:"5th shot drop", text:"3rd shot wasn't enough? Drop the 5th too. Keep advancing to kitchen." }
        ],
        youtube: [
          { title:"The 4th Shot — Pickleball's Most Ignored Weapon", sub:"Pickleball University", url:"https://www.youtube.com/watch?v=vhcl0Lg47x8" },
          { title:"Drive vs. Drop — Decision-Making Framework", sub:"How to read ball height, when to attack", url:"https://www.youtube.com/watch?v=Cw6Iz0nS0ds" },
          { title:"The 5th Shot Drop — Transition Zone Patience", sub:"When one drop wasn't enough, regroup strategy", url:"https://www.youtube.com/watch?v=zRuuKWiAsZI" }
        ]
      },
      {
        num: 6,
        priority: "Every player turns at least one defensive exchange into an offensive counter-chain during live play.",
        title: "Defensive Excellence",
        subtitle: "Bert Shot · Counter-Attack Chains · Court Recovery Patterns",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Defensive Footwork Warm-Up", type:"warmup", desc:"Lateral sprint + split step sequences. Side-to-side recovery drills. Defensive play requires fast reactive movement" },
          { time:"10–22", icon:"🎯", label:"The Bert Shot", type:"skill", desc:"Cross-court Erne — partner crosses in front of you to intercept a wide ball. Unlike the Erne, the Bert requires partner coordination: non-crossing player must cover the vacated court immediately. Signal: 'Bert!' called before the rally", guide: {
    setup: "Coach explains: a Bert is a cross-court Erne — your PARTNER steps around your side of the net post to poach a wide dink. Requires coordination: you cover their vacated side when they go for the Bert.",
    steps: ["Observe opponent's cross-court dink heading wide past your partner's side","Your partner calls 'Bert!' and steps around the net post on their side","You immediately shift across to cover their vacated court zone","Partner makes contact around the post — same mechanics as an Erne","You are now covering both your own zone AND their original zone","After the shot: your partner re-enters the court — you shift back"],
    progressions: [
      { label: "Foundation", desc: "Walk-through: coach feeds wide, partner calls Bert, other player covers. No speed — pure choreography." },
      { label: "Build", desc: "Half speed live: wide dinks fed cooperatively, Bert attempted on signal" },
      { label: "Challenge", desc: "Live game situation: Bert attempted when opportunity arises — no pre-signal" }
    ],
    errors: [
      { mistake: "Covering player not shifting — both players now on same side", fix: "\"When your partner goes Bert, you go opposite. Always.\"" },
      { mistake: "Bert contact with foot touching the NVZ extension line", fix: "\"Same as the Erne — both feet must clear the NVZ extension before contact.\"" }
    ],
    filler: "If time: Bert/Erne combo challenge — pair earns 2 bonus points for a successful Bert, 1 for an Erne."
  }},
          { time:"22–36", icon:"🏓", label:"Bert Coordination Drill", type:"drill", desc:"Pairs practice Bert setup: A feeds wide cross-court dink to B's partner. B crosses in for Bert, B's partner covers right. Walk-through → half speed → game speed. Signal system must be established before drilling", guide: {
    setup: "Player A and B at kitchen. Player C feeds wide cross-court dinks to B's side. B calls 'Bert!' and executes. A covers B's vacated zone. Rotate every 5 attempts.",
    steps: ["C feeds a wide cross-court dink to B's side","B calls 'Bert!' before moving","A immediately shifts toward B's zone","B steps around the post and contacts the ball","C tries to keep the point alive (or just observes)","Rotate: B → A, A → C, C → B. Track successful Berts per round."],
    progressions: [
      { label: "Foundation", desc: "C feeds slowly — B and A have more time to coordinate. Prioritize the choreography." },
      { label: "Build", desc: "C feeds at dinking pace — realistic timing for Bert decision" },
      { label: "Challenge", desc: "C sometimes feeds a ball that's NOT wide enough for Bert — B must decide: Bert or hold?" }
    ],
    errors: [
      { mistake: "A not covering the zone in time — gap on B's side when Bert is executed", fix: "\"A must move the moment B calls 'Bert!' — not after the ball is hit.\"" },
      { mistake: "B calling Bert but ball isn't wide enough — contacting over the post (not around)", fix: "\"If you're not going around the post, it's not a Bert. It's just a volley.\"" }
    ],
    filler: "If time: Bert Tournament — pairs compete. Most successful Berts in 5 minutes wins."
  }},
          { time:"36–50", icon:"🎯", label:"Counter-Attack Chain Building", type:"skill", desc:"Turn defence into offence: absorb first attack → redirect to open court → re-attack. Chain: defend → reset → pressure → attack. Most errors happen between the reset and the re-attack — players rush", guide: {
    setup: "Coach explains: defence into offence is a chain — absorb → redirect → re-attack. The defender doesn't just survive, they set up a counter chain. The key is a low, angled redirect that creates a difficult 2nd ball.",
    steps: ["Opponent speeds up hard — absorb with soft hands, block redirect low and angled","Opponent must now hit a difficult block counter — they can't attack it cleanly","Your redirect lands at their feet or wide — they pop it up","NOW you attack the popped-up ball — you're now the aggressor","Continue the chain: each exchange is a step toward offense"],
    progressions: [
      { label: "Foundation", desc: "3-touch sequence only: A attacks → B defends → A must hit a soft counter (not an attack). Learn the redirect step." },
      { label: "Build", desc: "5-touch chain: A attacks → B redirects low → A counters → B re-redirects → A attacks for winner" },
      { label: "Challenge", desc: "Open-ended: chain continues until someone wins. Who creates the attack opportunity first?" }
    ],
    errors: [
      { mistake: "Defender's redirect going too high — opponent puts it away again", fix: "\"The redirect must be low. Knee height or below. High redirects restart their attack.\"" },
      { mistake: "Defender not recognizing the pop-up — missing the counter-attack window", fix: "\"After you redirect: eyes up immediately. The next ball is your attack trigger.\"" }
    ],
    filler: "If time: 'Build the Chain' — start from a reset, count how many exchanges before you earn and execute an attack. Longest chain from defense wins."
  }},
          { time:"50–65", icon:"🏓", label:"Counter-Chain Drill", type:"drill", desc:"Player A attacks hard. Player B defends → redirects → Player A defends → Player B attacks. 3-touch chain before going live. Must complete full chain before attempting a put-away", guide: {
    setup: "Player A attacks hard. Player B defends → redirects. Player A defends → redirects. Chain continues. Track who creates the first clean attack opportunity from a defensive position.",
    steps: ["Player A drives hard to start the chain","Player B absorbs and redirects to A's feet — low and angled","Player A must counter-defend (not attack) — redirects back to B","Continue: both players redirecting until one ball pops up","First player to attack the pop-up wins the chain","Reset and repeat — switch who starts the chain"],
    progressions: [
      { label: "Foundation", desc: "60% pace — build the redirect pattern before adding speed" },
      { label: "Build", desc: "Full pace — realistic chain under match conditions" },
      { label: "Challenge", desc: "Movement added: both players shuffle left and right between each exchange — wider contact zones" }
    ],
    errors: [
      { mistake: "Players attacking before a pop-up opportunity — breaking the drill pattern", fix: "\"You can only attack on a ball above net tape. Everything else gets redirected.\"" },
      { mistake: "Redirects going to the same spot every time — easy to read", fix: "\"Vary your redirect target: sometimes feet, sometimes wide. Keep them guessing.\"" }
    ],
    filler: "If time: 'Chain King' — 3-minute window, both players tracking how many counter-chain opportunities they created. Coach counts."
  }},
          { time:"65–75", icon:"🎯", label:"Court Recovery Patterns", type:"skill", desc:"After being pulled wide: recovery step, not sprint. Return to your zone. After a lob: backpedal, don't turn. After a poach miss: recover to opposite side", guide: {
    setup: "Coach shows 3 recovery patterns: (1) pulled wide → crossover step back to center, (2) lobbed → backpedal with eyes up, (3) wrong side after poach → slide back to zone. Each requires a different movement pattern.",
    steps: ["Recovery 1 — Wide Pull: after ATPin or wide volley, crossover step (not shuffle) back to center T","Recovery 2 — Lob Recovery: turn and run at 45° angle, track ball overhead, set up for smash or concede","Recovery 3 — Poach Reset: after poaching, immediately check partner's position and slide to open zone","Practice each pattern with coach feeding the scenario","Key: recovery is complete when you reach ready position, not before"],
    progressions: [
      { label: "Foundation", desc: "Coach calls the scenario ('Wide!' 'Lob!' 'Reset!') — player executes just the movement, no ball" },
      { label: "Build", desc: "Live ball after the call — player recovers and plays the next shot from recovered position" },
      { label: "Challenge", desc: "Random scenario, no call — player must read the situation and apply the correct recovery pattern" }
    ],
    errors: [
      { mistake: "Shuffling sideways on a wide pull — too slow to recover", fix: "\"Crossover. One big step crosses twice the distance of a shuffle.\"" },
      { mistake: "Turning completely around on a lob — losing the ball", fix: "\"Turn at 45°, not 180°. Keep the ball visible over your shoulder.\"" }
    ],
    filler: "If time: 'Recovery Relay' — coach feeds 3 scenarios in sequence (wide, lob, poach). Player must recover from all 3. Fastest time wins."
  }},
          { time:"75–85", icon:"🏆", label:"Defensive Games — Survival Format", type:"game", desc:"One team starts in a 0-10 deficit. They must defend and counter-attack their way back. Builds resilience under pressure", guide: {
    setup: "One team starts at a 0-10 deficit. They must defend, counter-attack, and come back to win the game. No handicap adjustments — the pressure is the point. Coach observes defensive positioning and counter-chain usage.",
    steps: ["Deficit team starts at 0 points, opponent at 10 (game to 11)","Deficit team must win by 2 after reaching 11 — so they need to win at least 13 consecutive serves","Coach watches counter-defense: are they blocking and redirecting or panic-driving?","Debrief after each game: what defensive strategy worked? What sped up the comeback?","Rotate which team starts in deficit"],
    progressions: [
      { label: "Foundation", desc: "0-8 deficit — less extreme, still requires focused defense" },
      { label: "Build", desc: "0-10 deficit — standard survival format" },
      { label: "Challenge", desc: "0-10 deficit with rule: deficit team cannot drive any ball. Soft play only — pure patience and counter-chain" }
    ],
    errors: [
      { mistake: "Deficit team panicking and overswinging — falling further behind", fix: "\"One point at a time. You only need to win the next point, not all 11 at once.\"" },
      { mistake: "Deficit team playing passively — not converting counter-attack opportunities", fix: "\"Defense is the setup, offense is the finish. You need both to come back.\"" }
    ],
    filler: "If time: 'Ultimate Comeback' — 0-10 deficit, but deficit team gets 1 free point after every 3-shot counter-chain. Makes the format more achievable."
  }},
          { time:"85–90", icon:"💬", label:"Debrief", type:"cool", desc:"When did the counter-chain work? Where did recovery break down? What's the Bert signal you'll use with your regular partner?" }
        ],
        objectives: [
          "Execute a Bert with a partner using a pre-set signal and proper coverage",
          "Build a 3-touch counter-attack chain: defend → redirect → attack",
          "Apply correct court recovery patterns after being pulled wide, lobbed, or poached",
          "Develop mental resilience playing from a defensive position"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Score sheets for survival format"],
        coachTip: "The survival format game is a favourite at Level 3 — it creates genuine pressure that can't be simulated in a standard game. Players discover their defensive instincts when they're actually behind and fighting back.",
        cues: [
          { label:"Bert signal", text:"'Bert!' called before the rally starts — partner covers vacated half immediately" },
          { label:"Counter-chain", text:"Defend (soft block) → Reset (dink if off balance) → Pressure (to feet/angle) → Attack (only when opponent is out of position)" },
          { label:"Recovery — wide pull", text:"Recovery step back to your zone, not your original start spot" },
          { label:"Recovery — lob", text:"Backpedal with eyes on ball — never turn your back to the net" }
        ],
        youtube: [
          { title:"The Bert Shot — Doubles Crossover", sub:"Pickleball 411", url:"https://www.youtube.com/watch?v=dbbZRYVWmpM" },
          { title:"Counter-Attack — Defence to Offence", sub:"Turning defensive position into offensive opportunity", url:"https://www.youtube.com/watch?v=t6eIFG_FO9s" },
          { title:"Court Recovery — Positioning After Wide Balls", sub:"How to recover position after being pulled wide", url:"https://www.youtube.com/watch?v=1ZcRiDs1zz4" }
        ]
      },
      {
        num: 7,
        priority: "Every player leaves with a written 2-tactic match plan, a named pressure serve, and a personal pre-match routine.",
        title: "Tournament Preparation",
        subtitle: "Scouting Opponents · DUPR Rating · Match Pressure Simulations",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Pre-Match Routine Warm-Up", type:"warmup", desc:"Establish a personal pre-match warm-up routine: 3 groundstrokes, 3 serves, dink rally, overhead. Goal: replicate this routine before every tournament match" },
          { time:"10–25", icon:"🎯", label:"Scouting & In-Match Adjustments", type:"skill", desc:"5 things to observe in warm-up: dominant hand, backhand comfort, lob tendency, kitchen aggression, serve placement pattern. How to adjust: after 3 points, name their weakness and attack it specifically", guide: {
    setup: "Coach gives 5 specific things to scout in warm-up. Players practice doing the scout mentally during a 3-minute warm-up simulation.",
    steps: ["Scout 1: Dominant hand — backhand side is usually weaker, exploit it","Scout 2: Backhand comfort — do they drive backhand or dink it? Drives = give them pace, dinkers = go cross-court","Scout 3: Lob tendency — if they lob frequently, position slightly back of kitchen","Scout 4: Kitchen patience — do they attack early or wait? Counters differ for each","Scout 5: Partner communication — silent pairs miss middles. Attack center and watch for confusion"],
    progressions: [
      { label: "Foundation", desc: "Coach gives one observation mid-game: 'Their backhand is weak today.' Player adjusts accordingly." },
      { label: "Build", desc: "Player self-scouts: after 5 points, writes 1 observation on paper, then adjusts" },
      { label: "Challenge", desc: "Player scouts AND adjusts mid-game AND explains the adjustment to their partner during timeouts" }
    ],
    errors: [
      { mistake: "Player scouting but not adjusting — noticing without acting", fix: "\"The scout is useless if you don't use it. After you see it, change one thing immediately.\"" },
      { mistake: "Over-scouting — so focused on opponent they lose their own game", fix: "\"5 points to scout, then lock in your game plan. Don't keep analyzing forever.\"" }
    ],
    filler: "If time: 'Scout Report' — after 5 warm-up minutes, players must write 3 scout observations about their opponent before the match starts."
  }},
          { time:"25–38", icon:"🎯", label:"Understanding DUPR", type:"skill", desc:"DUPR (Dynamic Universal Pickleball Rating) — algorithm-based skill rating from 2.0–8.0. Every verified result adjusts your rating. Level 3 graduates typically enter 3.5–4.0. Register at mydupr.com", guide: {
    setup: "Quick whiteboard session on DUPR. Coach explains the algorithm. Players ask questions. 10 minutes max — keep it practical, not technical.",
    steps: ["DUPR = Dynamic Universal Pickleball Rating. Range 2.0 (beginner) to 8.0 (elite)","Algorithm: your result vs. your opponents' ratings, weighted by recency","Every match updates your rating — even recreational matches if entered","How to register: download the DUPR app, enter match results manually or via tournament integration","Key insight: play against players near your level. Wide mismatches don't help your rating much","EA tournament pathway: local EA events → DUPR-sanctioned regional events → open tournaments"],
    progressions: [
      { label: "Foundation", desc: "Coach explains the concept only — no registration required during session" },
      { label: "Build", desc: "Players download the app during the session and begin registration" },
      { label: "Challenge", desc: "Coach enters today's practice match results into DUPR as a demo" }
    ],
    errors: [
      { mistake: "Players thinking DUPR is only for competitive players — self-exclusion", fix: "\"DUPR is for everyone. It tracks your growth. Even recreational players benefit from seeing their number change.\"" },
      { mistake: "Players wanting to know their exact starting rating today", fix: "\"Rating only appears after 5+ entered matches. Start entering results, it shows up fast.\"" }
    ],
    filler: "If time: Q&A on DUPR — 5 minutes of questions. Coach answers from experience, not the manual."
  }},
          { time:"38–55", icon:"🏓", label:"Pressure Point Drills", type:"drill", desc:"Series of high-pressure point scenarios: start each rally at 10-10 deuce. Serve and immediately play out. Debrief each point. Builds the ability to execute skills when the score is tight", guide: {
    setup: "Series of high-pressure scenarios. Every rally starts at 10-10 deuce equivalent. Must win by 2. Stakes feel real even in practice. Coach referees with strict line calls.",
    steps: ["Scenario 1: Your serve at 10-10 — execute your go-to serve + 1 pattern","Scenario 2: Returning at 10-10 — deep return, rush kitchen, first dink dictates the rally","Scenario 3: Down 10-9 — you're receiving. One point determines the game.","Scenario 4: Match point — you're serving. All the pressure on you.","After each scenario: 30-second debrief — what was your mental state? Did you use the 3-second reset after errors?"],
    progressions: [
      { label: "Foundation", desc: "Play the scenarios cooperatively — both players want to see good execution" },
      { label: "Build", desc: "Competitive scenarios — someone wins, someone loses. Real pressure" },
      { label: "Challenge", desc: "Add audience: other players watch and react to each scenario point. Simulates tournament atmosphere" }
    ],
    errors: [
      { mistake: "Players tightening up — serving faults and unforced errors spike under pressure", fix: "\"Pressure reveals habits. If you fault under pressure, your serve mechanics need more grooves.\"" },
      { mistake: "Players not using the 3-second reset after errors in pressure points", fix: "\"This is exactly where the reset earns its value. Practice it now so it's automatic in a real match.\"" }
    ],
    filler: "If time: 'Pressure Ladder' — one player must win 3 consecutive 10-10 points to advance. Next round goes to 4 consecutive. Who makes it furthest?"
  }},
          { time:"55–68", icon:"🏓", label:"Scouting Simulation", type:"drill", desc:"Pairs play 5 points. Then they must name: opponent's weakest return side, whether they lob, and their serve pattern. Then play 5 more using that intel. Compare win rate before and after scouting" },
          { time:"68–82", icon:"🏆", label:"Tournament Simulation", type:"game", desc:"Best of 3 games (to 11, win by 2). Full tournament protocol: correct scoring calls, side changes at 6 in game 3, handshake/paddle tap at net after each game" },
          { time:"82–90", icon:"💬", label:"Tournament Readiness Debrief", type:"cool", desc:"What's your serving strategy for a tough match? What do you scout in warm-up? What's your mental reset routine? Preview Session 8 tournament format" }
        ],
        objectives: [
          "Establish and repeat a pre-match warm-up routine for consistency",
          "Identify an opponent's key weakness within the first 3 points",
          "Understand DUPR rating and how to register and submit results",
          "Execute skills under maximum pressure at 10-10 deuce scenarios"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Score sheets","Small scouting cards"],
        coachTip: "Tournament prep is about creating automatic responses to pressure situations. The 10-10 drill is the most valuable 15 minutes you can spend at Level 3. Run it multiple times — the first time is chaotic, the second time players start managing their nerves.",
        cues: [
          { label:"Scouting in warm-up", text:"Dominant hand | Backhand comfort | Lob tendency | Kitchen aggression | Serve pattern" },
          { label:"In-match adjustment", text:"After 3 points, name their weakness. Attack it specifically." },
          { label:"DUPR", text:"Register at mydupr.com — EA Pickleball League results are DUPR-verified" },
          { label:"Tournament conduct", text:"Call score loudly before every serve | Call your own balls out | Paddle tap after every game" }
        ],
        youtube: [
          { title:"How to Prepare for Your First Tournament", sub:"Zane Navratil", url:"https://www.youtube.com/watch?v=l1QiHbKOJ8w" },
          { title:"Best Coaching Advice for Tournament Play", sub:"Pickleball Effect", url:"https://www.youtube.com/watch?v=zSHMdoOF6MI" },
          { title:"The Mental Side of Pickleball Under Pressure", sub:"Enhance Pickleball", url:"https://www.youtube.com/watch?v=87I7dtv3o4Y" }
        ]
      },
      {
        num: 8,
        priority: "Every player competes under full tournament protocol and leaves with a personal game plan and a next step on their competitive pathway.",
        title: "Competitive Play Day & Graduation 🥇",
        subtitle: "Bracket Tournament · Advanced Skills Assessment · Certificate & What's Next",
        timeline: [
          { time:"0–10", icon:"🔥", label:"Pre-Match Routine (Self-Led)", type:"warmup", desc:"Players lead their own warm-up using their personal pre-match routine from Session 7. Coach observes without intervening — this is their routine now" },
          { time:"10–58", icon:"🥇", label:"Bracket Tournament", type:"game", desc:"Single elimination or pool play depending on group size. Games to 11 (win by 2). Full tournament rules, scoring, and conduct apply. Coach referees key matches" },
          { time:"58–72", icon:"📋", label:"Level 3 Skills Assessment", type:"skill", desc:"Erne attempt (1 successful), topspin serve (14/20 in service box, deep), speed-up chain (3-touch chain completed), drive vs. drop decision (3 correct reads observed by coach)" },
          { time:"72–82", icon:"🎓", label:"Graduation Ceremony", type:"cool", desc:"Advanced certificates of completion. Coach delivers individual highlight for each player — specific skill growth observed over 8 sessions. EA Leagues and competitive pathway info" },
          { time:"82–90", icon:"📣", label:"Competitive Pathway Presentation", type:"cool", desc:"EA Pickleball Leagues overview, DUPR tournament registration, recreational vs. competitive league options" }
        ],
        objectives: [
          "Compete in full tournament format under proper protocol",
          "Pass all Level 3 skills assessment benchmarks",
          "Receive individual growth coaching from session coach",
          "Understand competitive pathway: EA Leagues, DUPR, tournament registration"
        ],
        equipment: ["Paddles","Pickleballs × 6","Net","Score sheets","Advanced certificates","EA Leagues info package"],
        coachTip: "End by telling each player one specific growth moment you observed over the 8 sessions — not just a skill, but a moment. 'In session 4 you started using the reset instead of panic driving and it changed your game.' That specificity is what they'll remember.",
        assessment: [
          { skill:"Erne", target:"1 successful legal Erne in the assessment scenario" },
          { skill:"Topspin Serve", target:"14/20 land deep in service box with visible kick" },
          { skill:"Speed-up Chain", target:"Complete a 3-touch chain (attack → counter → re-attack)" },
          { skill:"Drive vs. Drop", target:"3 correct decisions observed in live play by coach" },
          { skill:"Stacking", target:"Execute one full stack with correct partner coverage" }
        ],
        youtube: [
          { title:"PrimeTime Pickleball", sub:"Best advanced channel — deep tactics, match analysis, pro breakdowns", url:"https://www.youtube.com/@PrimeTimePickleball" },
          { title:"Coach Briones", sub:"Advanced technique series, 4.0–5.0 skill development", url:"https://www.youtube.com/@CoachBriones" },
          { title:"The Pickleball Studio", sub:"Advanced doubles strategy and pattern play breakdowns", url:"https://www.youtube.com/@ThePickleballStudio" }
        ]
      }
    ]
  }
};