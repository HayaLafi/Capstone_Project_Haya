package com.example.Employee.Controller;
import com.example.Employee.Model.Entities.Holiday;
import com.example.Employee.Model.Service.HolidayService;

        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.*;

        import java.util.List;

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
    @PostMapping(path = "add")
    public void registerNewHoliday(@RequestBody Holiday holiday){
        holidayService.addNewHoliday(holiday);
    }
    @DeleteMapping(path = "delete/{HolidayId}")
    public void deleteHoliday(@PathVariable ("HolidayId") Integer HolidayId){
        holidayService.deleteHoliday(HolidayId);
    }
}