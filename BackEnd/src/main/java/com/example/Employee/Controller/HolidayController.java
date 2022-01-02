package com.example.Employee.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/holiday")
public class HolidayController {
    private HolidayService holidayService;
    @Autowired
    public HolidayController(HolidayService holidayService) {
        this.holidayService = holidayService;
    }
    @GetMapping
    public List<Holiday> getHolidays() {
        return holidayService.getHolidays();
    }
    @GetMapping(path = "{holidayId}")
    public Optional<Holiday> getHoliday(@PathVariable(name = "holidayId") Integer holidayId) {
        return holidayService.getHoliday(holidayId) ;
    }
    @PostMapping(path = "add")
    public void registerNewHoliday(@RequestBody Holiday holiday){
        holidayService.addNewHoliday(holiday);
    }


    @DeleteMapping(path = "delete/{HolidayId}")
    public void deleteHoliday(@PathVariable ("HolidayId") String HolidayId){
        int holyID= Integer.parseInt(HolidayId);
        holidayService.deleteHoliday(holyID);
    }
}
