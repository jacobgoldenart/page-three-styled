export default function Footer() {
	return (
		<>
			<footer
				aria-labelledby="footer-extras"
				className="footer vcard v22"
				id="csus-global-footer"
			>
				<div className="container-fluid">
					<h2 aria-hidden="true" className="d-none" id="footer-extras">
						Campus Contact Information
					</h2>
					<div className="row">
						<a
							href="https://www.tst.csus.edu"
							title="Click logo to return to Sac State Home Page"
						>
							{" "}
							<img
								alt="Sac State Logo, white on dark"
								src="https://irt-cdn.webhost.csus.edu/cascade/csusnew2019/NewCSUS2019-global-assets/_internal/images/whitelogo-stacked.png"
							/>
						</a>
						<address
							className="adr text-light"
							translate="no"
							typeof="schema:PostalAddress"
						>
							<span className="organization-name org fn" property="schema:name">
								California State University, Sacramento
							</span>
							<br /> <span className="nickname d-none">Sac State</span>{" "}
							<span className="street-address" property="schema:streetAddress">
								6000 J Street
							</span>
							,{" "}
							<span className="locality" property="schema:addressLocality">
								Sacramento
							</span>
							,{" "}
							<abbr
								className="region"
								property="schema:addressRegion"
								title="California"
							>
								CA
							</abbr>{" "}
							<span className="postal-code" property="schema:postalCode">
								95819
							</span>{" "}
							<abbr
								className="country-name"
								property="schema:addressCountry"
								title="United States"
							>
								USA
							</abbr>
							<br />
							Campus Main Phone:{" "}
							<a className="phone" href="tel:+19162786011">
								(916) 278-6011
							</a>{" "}
							<span className="geo d-none">
								{" "}
								<abbr className="latitude" title="48.816667">
									N 56° 38.5607423
								</abbr>{" "}
								<abbr className="longitude" title="2.366667">
									W 42° -121.4235885
								</abbr>{" "}
							</span>
						</address>
					</div>
				</div>
				<div
					aria-labelledby="compliance-links"
					className="container-fluid bottombar"
				>
					<h3 aria-hidden="true" className="d-none" id="compliance-links">
						Compliance Links
					</h3>{" "}
					<a
						href="https://csus.cascadecms.com/entity/open.act?id=c08a0a00ac1d00495bf39922dcae587d&type=page"
						className="dot"
					>
						Edit page in Cascade WCM
					</a>
					<ul className="offset-md-2" role="menu">
						<li role="menuitem">
							<a className="url uid" href="https://www2.calstate.edu/">
								California State University
							</a>
						</li>
						<li role="menuitem">
							<a
								className="url uid"
								href="https://www.tst.csus.edu/compliance/index.html"
							>
								Compliance
							</a>
						</li>
						<li role="menuitem">
							<a
								className="url uid"
								href="https://www.tst.csus.edu/campus-safety/index.html"
							>
								Campus Safety{" "}
							</a>
						</li>
						<li role="menuitem">
							<a
								className="url uid"
								href="https://www.tst.csus.edu/information-resources-technology/ati/accessibility-statement.html"
							>
								Accessibility Statement
							</a>
						</li>
						<li role="menuitem">
							<a href="https://www.tst.csus.edu/information-resources-technology/information-security/privacy-policy.html">
								Privacy Statement
							</a>
						</li>
						<li role="menuitem">
							<a
								className="url uid"
								href="https://www.tst.csus.edu/title-ix/index.html"
							>
								Title IX
							</a>
						</li>
						<li role="menuitem">
							<a
								className="url uid"
								href="https://www.tst.csus.edu/comments/index.html"
							>
								Comments
							</a>
						</li>
					</ul>
				</div>
			</footer>
			{/*#include virtual="/NewCSUS2019-global-assets/_internal/includes/global-footer-v2022.shtml" */}
		</>
	);
}
