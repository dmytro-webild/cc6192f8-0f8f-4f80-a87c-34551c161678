"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, BarChart, CheckCircle, FileText, Shield, UserCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="large"
        background="aurora"
        cardStyle="soft-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Services",          id: "features"},
        {
          name: "FAQ",          id: "faq"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Jordan FinServ"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars"}}
      logoText="خدمات محاسبية وضريبية متكاملة"
      description="حلول مالية احترافية للشركات والأفراد في الأردن. نلتزم بمعايير الضمان الاجتماعي والأنظمة الضريبية لضمان نمو استثماراتك."
      buttons={[
        {
          text: "احصل على استشارة",          href: "#contact"},
        {
          text: "تعرف على خدماتنا",          href: "#features"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/happy-businessman-working-his-office-businessperson-professional-environment_482257-32731.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="خبرة تزيد عن 10 سنوات"
      metrics={[
        {
          icon: CheckCircle,
          label: "عميل راضٍ",          value: "500+"},
        {
          icon: Shield,
          label: "مشاريع ضريبية ناجحة",          value: "1200+"},
        {
          icon: Award,
          label: "سنة خبرة",          value: "10+"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: BarChart,
          title: "مسك الدفاتر المحاسبية",          description: "تنظيم دقيق لعملياتك المالية الشهرية والسنوية."},
        {
          icon: FileText,
          title: "الخدمات الضريبية",          description: "إعداد وتقديم الإقرارات الضريبية وضمان الامتثال لضريبة الدخل والمبيعات."},
        {
          icon: UserCheck,
          title: "الضمان الاجتماعي",          description: "تسجيل الموظفين وإدارة اشتراكات الضمان الاجتماعي بكل يسر."},
      ]}
      title="خدماتنا المهنية"
      description="نقدم حلولاً محاسبية شاملة تهدف إلى تنظيم أعمالك المالية وضمان الامتثال التام للقوانين الأردنية."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "99%",          title: "دقة البيانات",          items: [
            "مراجعة دورية",            "إشراف محاسب قانوني"],
        },
        {
          id: "2",          value: "100%",          title: "الامتثال القانوني",          items: [
            "تحديثات مستمرة للقوانين",            "مطابقة معايير ضريبة الدخل"],
        },
      ]}
      title="لماذا تختارنا؟"
      description="نحن نجمع بين الخبرة التقنية والمعرفة العميقة بالأنظمة المالية المحلية في الأردن."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "أحمد خليل",          handle: "مدير شركة",          testimonial: "خدمات ممتازة ودقة عالية في الإنجاز.",          imageSrc: "http://img.b2bpic.net/free-photo/successful-inspirational-female-leader-sharing-her-business-goals-targets_482257-124807.jpg"},
        {
          id: "2",          name: "سارة محمود",          handle: "صاحبة مشروع",          testimonial: "ساعدوني كثيراً في تنظيم أموري الضريبية.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-people-office_23-2149300695.jpg"},
        {
          id: "3",          name: "خالد إبراهيم",          handle: "رائد أعمال",          testimonial: "احترافية في التعامل مع ملفات الضمان الاجتماعي.",          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-handsome-businessman_1262-21003.jpg"},
        {
          id: "4",          name: "مريم علي",          handle: "مديرة مالية",          testimonial: "فريق عمل متعاون جداً وفاهم للقوانين جيداً.",          imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-camera_107420-95907.jpg"},
        {
          id: "5",          name: "عمر حسن",          handle: "تاجر",          testimonial: "أنصح الجميع بخدماتهم المحاسبية الموثوقة.",          imageSrc: "http://img.b2bpic.net/free-photo/sharing-new-ideas_1098-14952.jpg"},
      ]}
      title="ماذا يقول عملاؤنا"
      description="ثقة عملائنا هي الأساس الذي نبني عليه نجاحنا المستمر."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "كيف أبدأ معكم؟",          content: "يمكنك التواصل معنا عبر صفحة الاتصال لتحديد موعد استشارة أولية."},
        {
          id: "f2",          title: "هل تشمل الخدمات الضمان الاجتماعي؟",          content: "نعم، نقدم إدارة كاملة لاشتراكات الضمان الاجتماعي للموظفين."},
        {
          id: "f3",          title: "هل تخدمون الشركات الناشئة؟",          content: "بالتأكيد، لدينا باقات خاصة تناسب الشركات الصغيرة والناشئة."},
      ]}
      sideTitle="أسئلة شائعة"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="تواصل معنا"
      title="ابدأ تنظيم أعمالك اليوم"
      description="فريقنا مستعد للإجابة على استفساراتك وتقديم أفضل الحلول المالية. يرجى التواصل معنا عبر البريد الإلكتروني: info@jordanfinserv.jo"
      buttons={[
        {
          text: "تواصل عبر الهاتف",          href: "tel:+962790000000"},
        {
          text: "راسلنا عبر البريد",          href: "mailto:info@jordanfinserv.jo"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/analyst-office_1098-14665.jpg"
      logoText="Jordan FinServ"
      columns={[
        {
          title: "الخدمات",          items: [
            {
              label: "مسك الدفاتر",              href: "#"},
            {
              label: "الخدمات الضريبية",              href: "#"},
          ],
        },
        {
          title: "تواصل معنا",          items: [
            {
              label: "هاتف: +962 79 000 0000",              href: "tel:+962790000000"},
            {
              label: "بريد: info@jordanfinserv.jo",              href: "mailto:info@jordanfinserv.jo"},
          ],
        },
        {
          title: "قانوني",          items: [
            {
              label: "سياسة الخصوصية",              href: "#"},
            {
              label: "شروط الخدمة",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2025 | جميع الحقوق محفوظة لشركة الأردن للحلول المالية"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}