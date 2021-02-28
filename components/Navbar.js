/* eslint-disable jsx-quotes */
// eslint-disable-next-line prettier/prettier
import React from 'react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <section>
      <div className="menu-area">
        <div className="top-menu-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="menu-fullwidth">
                  <div className="logo-wrapper">
                    <div className="">
                      <a href="">
                        <img
                          src={logo}
                          alt="logo image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="menu-container">
                    <div className="d_menu">
                      <nav className="navbar navbar-expand-lg mainmenu__menu">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#bs-example-navbar-collapse-1"
                          aria-controls="bs-example-navbar-collapse-1"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon icon-menu" />
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="bs-example-navbar-collapse-1"
                        >
                          <ul className="navbar-nav">
                            <li className="has_dropdown">
                              <a>Home</a>
                              <div className="dropdown dropdown--menu">
                                <ul>
                                  <li>
                                    <a>Home Multi Vendor</a>
                                  </li>
                                  <li>
                                    <a>Home Two Single User</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="has_dropdown">
                              <a>All Product</a>
                              <div className="dropdown dropdown--menu">
                                <ul>
                                  <li>
                                    <a href="all-products.html">Recent Items</a>
                                  </li>
                                  <li>
                                    <a href="all-products.html">
                                      Popular Items
                                    </a>
                                  </li>
                                  <li>
                                    <a>Free Templates</a>
                                  </li>
                                  <li>
                                    <a href="#">Follow Feed</a>
                                  </li>
                                  <li>
                                    <a href="#">Top Authors</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li class="has_dropdown">
                              <a href="category-grid.html">Categories</a>
                              <div class="dropdown dropdown--menu">
                                <ul>
                                  <li>
                                    <a href="category-grid.html">
                                      Popular Items
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-grid.html">
                                      Admin Templates
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-grid.html">
                                      Blog / Magazine / News
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-grid.html">Creative</a>
                                  </li>
                                  <li>
                                    <a href="category-grid.html">
                                      Corporate Business
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-grid.html">
                                      Resume Portfolio
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-grid.html">eCommerce</a>
                                  </li>
                                  <li>
                                    <a href="category-grid.html">
                                      Entertainment
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-grid.html">
                                      Landing Pages
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li class="has_megamenu">
                              <a href="#">Elements</a>
                              <div class="dropdown_megamenu contained">
                                <div class="megamnu_module">
                                  <div class="menu_items">
                                    <div class="menu_column">
                                      <ul>
                                        <li>
                                          <a href="accordion.html">Accordion</a>
                                        </li>
                                        <li>
                                          <a href="alert.html">Alert</a>
                                        </li>
                                        <li>
                                          <a href="brands.html">Brands</a>
                                        </li>
                                        <li>
                                          <a href="buttons.html">Buttons</a>
                                        </li>
                                        <li>
                                          <a href="cards.html">Cards</a>
                                        </li>
                                        <li>
                                          <a href="charts.html">Charts</a>
                                        </li>
                                        <li>
                                          <a href="content-block.html">
                                            Content Block
                                          </a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div class="menu_column">
                                      <ul>
                                        <li>
                                          <a href="dropdowns.html">Dropdowns</a>
                                        </li>
                                        <li>
                                          <a href="features.html">Features</a>
                                        </li>
                                        <li>
                                          <a href="info-box.html">Info Box</a>
                                        </li>
                                        <li>
                                          <a href="modal.html">Modal</a>
                                        </li>
                                        <li>
                                          <a href="peoples.html">Peoples</a>
                                        </li>
                                        <li>
                                          <a href="products.html">Products</a>
                                        </li>
                                        <li>
                                          <a href="social.html">Social</a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div class="menu_column">
                                      <ul>
                                        <li>
                                          <a href="tab.html">Tabs</a>
                                        </li>
                                        <li>
                                          <a href="table.html">Table</a>
                                        </li>
                                        <li>
                                          <a href="testimonials.html">
                                            Testimonials
                                          </a>
                                        </li>
                                        <li>
                                          <a href="timeline.html">Timeline</a>
                                        </li>

                                        <li>
                                          <a href="typography.html">
                                            Typography
                                          </a>
                                        </li>

                                        <li>
                                          <a href="headers.html">
                                            Header Styles
                                          </a>
                                        </li>
                                        <li>
                                          <a href="pricing.html">Pricing</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="has_megamenu">
                              <a href="#">Pages</a>
                              <div class="dropdown_megamenu">
                                <div class="megamnu_module">
                                  <div class="menu_items">
                                    <div class="menu_column">
                                      <ul>
                                        <li class="title">Product</li>
                                        <li>
                                          <a href="all-products.html">
                                            Products Grid
                                          </a>
                                        </li>
                                        <li>
                                          <a href="category-grid.html">
                                            Category Grid
                                          </a>
                                        </li>
                                        <li>
                                          <a href="search-product.html">
                                            Search Product
                                          </a>
                                        </li>
                                        <li>
                                          <a href="single-product.html">
                                            Single Product V1
                                          </a>
                                        </li>
                                        <li>
                                          <a href="single-product-v2.html">
                                            Single Product V2
                                          </a>
                                        </li>
                                        <li>
                                          <a href="single-product-v3.html">
                                            Single Product V3
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cart.html">Shopping Cart</a>
                                        </li>
                                        <li>
                                          <a href="checkout.html">Checkout</a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div class="menu_column">
                                      <ul>
                                        <li class="title">Author</li>
                                        <li>
                                          <a href="author.html">
                                            Author Profile
                                          </a>
                                        </li>

                                        <li>
                                          <a href="notification.html">
                                            Notifications
                                          </a>
                                        </li>
                                        <li>
                                          <a href="message.html">
                                            Message Inbox
                                          </a>
                                        </li>
                                        <li>
                                          <a href="message-compose.html">
                                            Message Compose
                                          </a>
                                        </li>
                                        <li>
                                          <a href="favourites.html">
                                            Favorites Items
                                          </a>
                                        </li>
                                        <li>
                                          <a href="career.html">Job Posts</a>
                                        </li>
                                        <li>
                                          <a href="job-detail.html">
                                            Job Details
                                          </a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div class="menu_column">
                                      <ul>
                                        <li class="title">Dashboard</li>
                                        <li>
                                          <a href="dashboard.html">Dashboard</a>
                                        </li>
                                        <li>
                                          <a href="dashboard-setting.html">
                                            Account Settings
                                          </a>
                                        </li>
                                        <li>
                                          <a href="dashboard-purchase.html">
                                            Author Purchases
                                          </a>
                                        </li>
                                        <li>
                                          <a href="dashboard-add-credit.html">
                                            Add Credits
                                          </a>
                                        </li>
                                        <li>
                                          <a href="dashboard-statement.html">
                                            Statements
                                          </a>
                                        </li>
                                        <li>
                                          <a href="invoice.html">Invoice</a>
                                        </li>
                                        <li>
                                          <a href="dashboard-upload.html">
                                            Upload Item
                                          </a>
                                        </li>
                                        <li>
                                          <a href="dashboard-manage-item.html">
                                            Manage Items
                                          </a>
                                        </li>
                                        <li>
                                          <a href="edit-item.html">
                                            Edit Items
                                          </a>
                                        </li>
                                        <li>
                                          <a href="dashboard-withdrawal.html">
                                            Withdrawals
                                          </a>
                                        </li>
                                        <li>
                                          <a href="add-payment-method.html">
                                            Add Payment Method
                                          </a>
                                        </li>
                                        <li>
                                          <a href="order-confirm.html">
                                            Order Confirm
                                          </a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div class="menu_column">
                                      <ul>
                                        <li class="title">User</li>
                                        <li>
                                          <a href="support-forum.html">
                                            Support Forum
                                          </a>
                                        </li>
                                        <li>
                                          <a href="support-forum-detail.html">
                                            Forum Details
                                          </a>
                                        </li>
                                        <li>
                                          <a href="support-forum-form.html">
                                            Forum Form
                                          </a>
                                        </li>
                                        <li>
                                          <a href="login.html">Login</a>
                                        </li>
                                        <li>
                                          <a href="signup.html">Register</a>
                                        </li>
                                        <li>
                                          <a href="recover-pass.html">
                                            Recovery Password
                                          </a>
                                        </li>
                                        <li>
                                          <a href="customer-dashboard.html">
                                            Customer Dashboard
                                          </a>
                                        </li>
                                        <li>
                                          <a href="customer-downloads.html">
                                            Customer Downloads
                                          </a>
                                        </li>
                                        <li>
                                          <a href="customer-info.html">
                                            Customer Info
                                          </a>
                                        </li>
                                      </ul>

                                      <ul>
                                        <li class="title">Blog</li>
                                        <li>
                                          <a href="blog1.html">Blog V-1</a>
                                        </li>
                                        <li>
                                          <a href="blog2.html">Blog V-2</a>
                                        </li>
                                        <li>
                                          <a href="single-blog.html">
                                            Single Blog
                                          </a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div class="menu_column">
                                      <ul>
                                        <li class="title">Other</li>
                                        <li>
                                          <a href="how-it-works.html">
                                            How It Works
                                          </a>
                                        </li>
                                        <li>
                                          <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                          <a href="pricing.html">
                                            Pricing Plan
                                          </a>
                                        </li>
                                        <li>
                                          <a href="testimonial.html">
                                            Testimonials
                                          </a>
                                        </li>
                                        <li>
                                          <a href="faq.html">FAQs</a>
                                        </li>
                                        <li>
                                          <a href="faq-details.html">
                                            FAQ's Details
                                          </a>
                                        </li>
                                        <li>
                                          <a href="affiliate.html">
                                            Affiliates
                                          </a>
                                        </li>
                                        <li>
                                          <a href="term-condition.html">
                                            Terms &amp; Conditions
                                          </a>
                                        </li>
                                        <li>
                                          <a href="event.html">Event</a>
                                        </li>
                                        <li>
                                          <a href="event-detail.html">
                                            Event Detail
                                          </a>
                                        </li>
                                        <li class="has_badge">
                                          <a href="badges.html">
                                            Badges{' '}
                                            <span class="badge badge-primary">
                                              New
                                            </span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="404.html">404 Error page</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <a href="contact.html">contact</a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
