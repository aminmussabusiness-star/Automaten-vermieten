import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import App from "@/App";

describe("Portal routing", () => {
  it("shows the machine overview and links to machine detail pages", async () => {
    window.history.pushState({}, "", "/automaten");
    render(<App />);

    expect(screen.getByRole("link", { name: "Automaten mieten" })).toBeInTheDocument();
    expect(screen.getAllByRole("img").length).toBeGreaterThan(3);
    expect(screen.getAllByRole("link", { name: /Mehr zum Automaten/i }).length).toBeGreaterThan(1);
  });

  it("opens the selected machine on the detail page and keeps the contact path", async () => {
    const user = userEvent.setup();
    window.history.pushState({}, "", "/automaten");
    render(<App />);

    await user.click(screen.getAllByRole("link", { name: /Mehr zum Automaten/i })[0]);

    expect(screen.getByText("Direkt fuer Royal Lounge 8 anfragen")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Anfrage stellen/i })).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Firmenname")).toBeInTheDocument();
  });

  it("shows the selected machine on the contact page", () => {
    window.history.pushState(
      {},
      "",
      "/kontakt?automat=royal-lounge-8&laufzeit=3+Monate&paket=Basis&mietpreis=349+EUR&kaution=950+EUR",
    );
    render(<App />);

    expect(screen.getByText("Vorausgewaehlt")).toBeInTheDocument();
    expect(screen.getByText("Royal Lounge 8")).toBeInTheDocument();
    expect(screen.getByText("Mietlaufzeit:")).toBeInTheDocument();
    expect(screen.getByText("3 Monate")).toBeInTheDocument();
    expect(screen.getByText("349 EUR")).toBeInTheDocument();
  });

  it("updates price and deposit on the detail page when options change", async () => {
    const user = userEvent.setup();
    window.history.pushState({}, "", "/automaten/royal-lounge-8");
    render(<App />);

    await user.click(screen.getByRole("button", { name: "24 Monate" }));
    await user.click(screen.getByRole("button", { name: /Premium/i }));

    expect(screen.getByText("403 EUR")).toBeInTheDocument();
    expect(screen.getByText("1.999 EUR")).toBeInTheDocument();
  });
});
