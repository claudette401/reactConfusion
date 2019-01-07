===============================
===============================

Main Component

===============================

mapStateToProps {items}
mapDispatchToProps {actions}

Main Component

	DidMount {fetchItems}
	render 
		header
		switch
			home
			menu
			dishdetail
			contact
			about
			home
		footer
	export Main

===============================
===============================

Header Component

===============================

Header Component
	nav state
	modal state

	toggleNav
	toggleModal
	handleLogin

	render
		nav
		jumbotron
		login modal
	export Header

===============================
===============================

Home Component

===============================

func RenderCard
	if loading, show loading icon
	elseif error, show error
	else
		return(card)

func Home
	RenderCard(item)

export Home

===============================
===============================

Menu Component

===============================

func RenderMenuItem

var Menu
	if loading, show loading icon
	elseif error, show error
	else
		Breadcrumb
		RenderMenuItem(dish)

export Menu

===============================
===============================

Dishdetail Component

===============================


func RenderDish

func RenderComments

commentFormValidators

CommentForm Component
	modalState

	toggleModal
	handleComment

	render
		SubmitComment Modal

var Dishdetail
	if loading, show loading icon
	elseif error, show error
	else
		Breadcrumb
		RenderDish
		RenderComments

export Dishdetail

===============================
===============================

Contact Component

===============================

feedbackFormValidators

Contact Component

	handleSubmit

	render
		Breadcrumb
		StaticLocationInfo
		SendFeedbackForm

export Contact

===============================
===============================

About Component

===============================

func RenderLeaders

func About
	return
		Breadcrumbs
		StaticBrandingInfo
		RenderLeaders

export About


===============================
===============================

Comment Component

===============================

