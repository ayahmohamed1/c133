// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const giftData: Record<string, GiftData> = {

  // ----------------------------------------------------------
  // CUSTOMER: Aya
  // Link: yourdomain.com/gift/aya
  // ----------------------------------------------------------
  aya: {
    name: "layla",                                     // اسم مستلم الهدية
    senderName: "your love",                                   // التوقيع في آخر الرسالة (اختياري)
    envelopeImage: "/images/envelope-aya.png",           // صورة الظرف
    birthdayImage: "/images/birthday-aya.png",           // صورة الهدية النهائية
    accentColor: "#38bdf8",                              // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
    musicUrl: "",                                        // رابط الموسيقى هنا
    message: `To the most beautiful and sweetest soul to ever walk this earth,

Happy birthday, my love. ❤️

I wish I could put into words just how much you mean to me, but somehow every word feels too small. You make ordinary days feel special, you bring warmth into my life, and you have a way of making my heart feel at home.

On your birthday, I hope you see even a little of what I see when I look at you: someone precious, kind, beautiful, and truly one of a kind. You deserve every bit of happiness this world can offer, every dream coming true, and a lifetime full of reasons to smile.

Thank you for being you, for the little moments, the laughs, the memories, and for making my life more beautiful just by being part of it. I hope this new year of your life brings you endless joy. And I hope I get to stand beside you through so many more birthdays, cheering for you, loving you, and reminding you how special you are.

Today is all about you, my love. If I could give you one thing, it would be the ability to see yourself through my eyes—then you'd understand how unbelievably special you are to me.

Happy birthday, sweetheart. I love you more than words can ever explain. ❤️`,
  },

};

export default giftData;
