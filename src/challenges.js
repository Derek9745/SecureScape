// Challenge content for SecureScape.
// Each challenge teaches one security concept. Every option carries its own
// `feedback` so the player learns why an answer was right or wrong.
//
// Shape:
//   id, title, concept, intro, takeaways[], questions[]
//   question: { prompt, scenario?, options: [{ text, correct, feedback }] }
// Exactly one option per question should be `correct: true`.

export const challenges = [
  {
    id: 'email_phishing',
    title: 'Email Phishing',
    concept: 'Spotting phishing emails',
    route: '/email_phishing',
    intro: 'Learn how to detect social engineering through email!',
  },
  {
    id: 'weak_passwords',
    title: 'Weak Passwords',
    concept: 'Password strength, reuse, and multi-factor authentication',
    route: '/challenge/weak_passwords',
    intro:
      'The vault door is locked behind a login. Attackers guess passwords with software that tries billions of combinations, so choose carefully.',
    takeaways: [
      'Length beats complexity: a long passphrase is stronger than a short string of symbols.',
      'Never reuse a password. One breached site exposes every account that shares it.',
      'Turn on multi-factor authentication (MFA) so a stolen password alone is not enough.',
      'Use a password manager so every account can have a unique, random password.',
    ],
    questions: [
      {
        prompt: 'Which password would be hardest for an attacker to crack?',
        options: [
          {
            text: 'P@ssw0rd1!',
            correct: false,
            feedback:
              'Swapping letters for symbols (a→@, o→0) is the first trick attackers try. This pattern is in every cracking dictionary, so it falls in seconds despite looking complex.',
          },
          {
            text: 'Tr0ub4dor&3',
            correct: false,
            feedback:
              'This is a classic "complex" password. It is only 11 characters and follows predictable substitution rules, so modern cracking tools handle it easily.',
          },
          {
            text: 'correct-horse-battery-staple-lantern',
            correct: true,
            feedback:
              'Correct! Several random, unrelated words make a long passphrase. Each extra character multiplies the number of guesses needed, and it is easy to remember.',
          },
          {
            text: 'Summer2024',
            correct: false,
            feedback:
              'A season plus a year is one of the most common patterns there is. Attackers try these first, and they are easy to guess for anyone who knows roughly when you set it.',
          },
        ],
      },
      {
        scenario:
          'A news site you used years ago announces a data breach. You used the same email and password for that site, your email, and your bank.',
        prompt: 'What should you do first?',
        options: [
          {
            text: 'Nothing. It was only a news site, so no important data was exposed.',
            correct: false,
            feedback:
              'Attackers run "credential stuffing": they try leaked email and password pairs on banks, email, and shopping sites. The news site is not the target, your reused password is.',
          },
          {
            text: 'Change the password only on the news site.',
            correct: false,
            feedback:
              'The leaked password is already in attackers\' hands, and it still works on your email and bank. Every account that shares it must be changed.',
          },
          {
            text: 'Change the password on every account that used it, starting with email and the bank, and make each one unique.',
            correct: true,
            feedback:
              'Correct! Start with the most valuable accounts. Your email matters most because password resets for everything else go there. Unique passwords stop one breach from spreading.',
          },
          {
            text: 'Add a number to the end of the old password on each account.',
            correct: false,
            feedback:
              'Small tweaks to a leaked password are easy to guess, and attackers try common variations automatically. Each new password should be unrelated to the old one.',
          },
        ],
      },
      {
        scenario:
          'An attacker has your correct password after a phishing attack, and tries to log in to your account.',
        prompt: 'Which protection would still stop them?',
        options: [
          {
            text: 'A longer password',
            correct: false,
            feedback:
              'Length protects against guessing, not theft. If the attacker already has the password, length makes no difference.',
          },
          {
            text: 'Multi-factor authentication (MFA)',
            correct: true,
            feedback:
              'Correct! MFA needs a second proof, such as an authenticator app code or a hardware key, that the attacker does not have. A stolen password alone is no longer enough.',
          },
          {
            text: 'A security question like "Mother\'s maiden name?"',
            correct: false,
            feedback:
              'Security question answers are often public or guessable from social media. They are weak compared to a real second factor.',
          },
          {
            text: 'Changing the password every week',
            correct: false,
            feedback:
              'Frequent forced changes lead people to pick weaker, predictable passwords, and the attacker can use the stolen one immediately. Change it when there is a reason, and use MFA.',
          },
        ],
      },
    ],
  },
  {
    id: 'social_engineering',
    title: 'Social Engineering',
    concept: 'Pretexting, tailgating, and baiting',
    route: '/challenge/social_engineering',
    intro:
      'Not every attack uses code. Social engineers exploit trust, helpfulness, and urgency to get people to open doors for them.',
    takeaways: [
      'Verify identity through a channel you already trust, never one the caller or sender gives you.',
      'Urgency and authority are pressure tactics. Slowing down is the defense.',
      'Politely refuse to let unknown people follow you through secured doors, and direct them to reception.',
      'Never plug in found devices. Hand them to IT or security.',
    ],
    questions: [
      {
        scenario:
          'Your phone rings. "Hi, this is Mark from IT. We detected a virus on your computer. I need your password right now to remove it before it spreads."',
        prompt: 'What is the best response?',
        options: [
          {
            text: 'Give the password. IT needs it to fix the problem quickly.',
            correct: false,
            feedback:
              'Real IT staff do not need your password and should never ask for it. The urgency ("right now") is a pressure tactic called pretexting.',
          },
          {
            text: 'Hang up, then contact IT using the number on the company intranet or directory.',
            correct: true,
            feedback:
              'Correct! Verify through a channel you already trust. If the problem is real, the real IT team will confirm it. Report the call so others are warned.',
          },
          {
            text: 'Ask the caller to confirm your employee ID number.',
            correct: false,
            feedback:
              'Asking the caller to prove they know your details does not work. Social engineers research targets, and a number they recite proves nothing. You must verify them independently.',
          },
          {
            text: 'Call back the number that showed on your caller ID.',
            correct: false,
            feedback:
              'Caller ID can be spoofed, and if the caller gave you a number to call back, it leads to the attacker. Use a number you already know to be real.',
          },
        ],
      },
      {
        scenario:
          'You badge into the office. A person in a delivery uniform, hands full of boxes, asks you to hold the secured door because they "forgot their badge."',
        prompt: 'What should you do?',
        options: [
          {
            text: 'Hold the door. They are carrying heavy boxes and look legitimate.',
            correct: false,
            feedback:
              'This is tailgating. Uniforms and full hands are props that make refusing feel rude. Anyone could be behind that door once they are inside.',
          },
          {
            text: 'Let them in but watch where they go.',
            correct: false,
            feedback:
              'Once inside, the person is past your access control, and you can\'t follow them everywhere. The door is where the check has to happen.',
          },
          {
            text: 'Politely direct them to reception to be signed in and escorted.',
            correct: true,
            feedback:
              'Correct! Everyone, even a friendly visitor, goes through the visitor process. A legitimate courier will understand, and an attacker is stopped without confrontation.',
          },
          {
            text: 'Ask which company they are from, and let them in if the answer sounds right.',
            correct: false,
            feedback:
              'A convincing answer is not verification. Attackers prepare plausible stories, so access decisions must rely on badges and sign-in rather than a conversation.',
          },
        ],
      },
      {
        scenario:
          'In the parking lot you find a USB drive labeled "Salary Review - Confidential."',
        prompt: 'What is the safest action?',
        options: [
          {
            text: 'Plug it into your work computer to find out who owns it.',
            correct: false,
            feedback:
              'This is a baiting attack. Malicious USB drives can install malware the moment they are plugged in, and the tempting label is there to make you curious.',
          },
          {
            text: 'Plug it into your personal laptop instead, so work is safe.',
            correct: false,
            feedback:
              'Malware does not care whose computer it is on. Your personal laptop and everything stored on it would be at risk, and it may connect to work accounts.',
          },
          {
            text: 'Hand it to IT or security without plugging it in.',
            correct: true,
            feedback:
              'Correct! IT can inspect it in an isolated environment, and the attempt can be reported. Curiosity is exactly what the attacker is counting on.',
          },
          {
            text: 'Throw it away.',
            correct: false,
            feedback:
              'Not harmful to you, but a missed chance. Security should know a targeted attack may be underway, so handing it over lets them warn others and check for related activity.',
          },
        ],
      },
    ],
  },
]

export const getChallenge = (id) => challenges.find((c) => c.id === id)

const STORAGE_KEY = 'securescape.completed'

export function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

export function markCompleted(id) {
  try {
    const done = getCompleted()
    if (!done.includes(id)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...done, id]))
    }
  } catch {
    // storage unavailable (private mode); progress just won't persist
  }
}
