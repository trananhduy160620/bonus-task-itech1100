function handleOperatingCost() {
    // MARK: - Handle for first employee
    let staffSalary1 = handleStaffSalary(
        Number(document.getElementById("hours-per-day-1").value),
        Number(document.getElementById("days-in-week-1").value),
        Number(document.getElementById("extra-worked-hours-1").value),
        Number(document.getElementById("hourly-rate-1").value),
        Number(document.getElementById("casual-shift-1").value),
        Number(document.getElementById("annual-leave-1").value)
    )
    // MARK: - Handle for second employee
    let staffSalary2 = handleStaffSalary(
        Number(document.getElementById("hours-per-day-2").value),
        Number(document.getElementById("days-in-week-2").value),
        Number(document.getElementById("extra-worked-hours-2").value),
        Number(document.getElementById("hourly-rate-2").value),
        Number(document.getElementById("casual-shift-2").value),
        Number(document.getElementById("annual-leave-2").value)
    )
    // MARK: - Handle for third employee
    let staffSalary3 = handleStaffSalary(
        Number(document.getElementById("hours-per-day-3").value),
        Number(document.getElementById("days-in-week-3").value),
        Number(document.getElementById("extra-worked-hours-3").value),
        Number(document.getElementById("hourly-rate-3").value),
        Number(document.getElementById("casual-shift-3").value),
        Number(document.getElementById("annual-leave-3").value)
    )
    // MARK: - Handle for employee cost
    let employeeCost = staffSalary1 + staffSalary2 + staffSalary3
    // MARK: - Handle for fixed cost
    let fixedCostPerYear = Number(document.getElementById("fixed-cost").value)
    let utilitiesCostPerYear = 12 * Number(document.getElementById("util-cost").value)
    // MARK: - Handle for Total operating cost
    let fixedCost = fixedCostPerYear + utilitiesCostPerYear
    let operatingCost = employeeCost + fixedCost
    // MARK: - Display the output
    let empCostLabel = document.getElementById("emp-cost")
    empCostLabel.innerHTML = `$${employeeCost}`
    let fixedCostLabel = document.getElementById("fixed-cost-output")
    fixedCostLabel.innerHTML = `$${fixedCost}`
    let operatingCostLabel = document.getElementById("operating-cost")
    operatingCostLabel.innerHTML = `$${operatingCost}`
}

function handleStaffSalary(hoursPerDay, daysInWeek, extraWorkHours, hourlyRate, casualShift, annualLeave) {
    let totalHoursPerWeek = hoursPerDay * daysInWeek + extraWorkHours
    let totalHoursPerYear = 52 * totalHoursPerWeek
    let totalHoursCasualPerYear = annualLeave * totalHoursPerWeek
    let totalPay = totalHoursPerYear * hourlyRate + totalHoursCasualPerYear * casualShift
    return totalPay
}

function handleAutomationProcess(event) {
    // MARK: Declare variables
    let materialPrice = 0
    let shippingPrice = 0
    let totalPrice = 0
    // MARK: Get material data from UI selection
    let materialSelection = document.getElementById("material-size")
    let materialSelectedIndex = materialSelection.selectedIndex
    let materialSelectedValue = materialSelection.options[materialSelectedIndex].value
    switch (materialSelectedValue) {
        case "NS": materialPrice = 110; break;
        case "NL": materialPrice = 165; break;
        case "CS": materialPrice = 220; break;
        case "CL": materialPrice = 275; break;
        case "LS": materialPrice = 340; break;
        case "LL": materialPrice = 395; break;
        case "none": totalPrice = 0; break;
        default: materialPrice = 0; break;
    }
    // MARK: Get shipping type data from UI selection
    let shippingSelection = document.getElementById("shipping-type")
    let shippingSelectedIndex = shippingSelection.selectedIndex
    let shippingSelectedValue = shippingSelection.options[shippingSelectedIndex].value
    switch (shippingSelectedValue) {
        case "standard": shippingPrice = 10; break;
        case "express": shippingPrice = 20; break;
        case "none": totalPrice = 0; break;
        default: totalPrice = 0; break;
    }
    // MARK: Handle for calculating the total price
    totalPrice = materialPrice + shippingPrice
    // MARK: Display detail from user selection
    let materialPriceLabel = document.getElementById("material-price-output")
    materialPriceLabel.innerHTML = `$${materialPrice}`
    let shippingPriceLabel = document.getElementById("shipping-price-output")
    shippingPriceLabel.innerHTML = `$${shippingPrice}`
    let totalPriceLabel = document.getElementById("total-price-output")
    totalPriceLabel.innerHTML = `$${totalPrice}`
}
