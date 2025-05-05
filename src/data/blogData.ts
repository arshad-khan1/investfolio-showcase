
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  link: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Equity Risk Premium",
    excerpt: "In laymen term EPR that “Return expected by investors for investing in Equity Market”",
    date: "Feb 1, 2025",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Investment Strategy",
    link: "https://aakshit.substack.com/p/erp"
  },
  {
    id: 2,
    title: "How not to calculate Beta",
    excerpt: "Beta of a particular stock tells us the Relative Risk of Measure or it a risk that particular business has when compared with market.",
    date: "Jan 29, 2025",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Sustainable Finance",
    link: "https://aakshit.substack.com/p/beta"
  },
  {
    id: 3,
    title: "Valuation of Index",
    excerpt: "valuation is a function of three components:- Risk, Growth , Cash. We can calculate Risk and Growth of index without any problem.",
    date: "Dec 28, 2024",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.3.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Valuation",
    link: "https://aakshit.substack.com/p/valuation-of-index"
  },
  {
    id: 4,
    title: "Risk Free Rate",
    excerpt: "Basically risk free rate is the rate of return on investment that an investor can expects on its investment.",
    date: "Dec 26, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    category: "Fundamental Analysis",
    link: "https://aakshit.substack.com/p/risk-free-rate"
  },
  {
    id: 5,
    title: "Everything is WRONG with Tier 3/4 MBA colleges",
    excerpt: "Its high time that Indian college specially the tier 3/4 MBA colleges take the responsibility of their actions.",
    date: "Apr 12, 2025",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Behavioral Finance",
    link: "https://aakshit.substack.com/p/everything-is-wrong-with-tier-34"
  },
];
