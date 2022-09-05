package com.skilldistillery.witchualtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.witchualtracker.entities.Ritual;
import com.skilldistillery.witchualtracker.services.RitualService;

@RestController
@RequestMapping("api")
public class RitualController {
	
	
	
	@Autowired
	private RitualService ritualServ;
	
	@GetMapping("rituals")
	public List<Ritual> index() {
		return ritualServ.index();
	}
	
	@GetMapping("id/{id}")
	public Ritual findById(@PathVariable int id) {
		return ritualServ.findById(id);
	}
	
	@PostMapping("ritual")
	public Ritual createRitual(@RequestBody Ritual ritual, HttpServletResponse res) {
		Ritual add = null;
		add = ritualServ.createRitual((ritual));
		if(add == null) {
			res.setStatus(404);
		} else {
			res.setStatus(201);
		}
		return ritual;
	}
	
	@PutMapping("ritual/{id}")
	public Ritual updateRitual(@PathVariable int id, @RequestBody Ritual ritual, HttpServletResponse res) {
		ritual = ritualServ.updateRitual(id, ritual);
		return ritual;
	}
	
	@DeleteMapping("ritual/{id}")
	public void deleteRitual (@PathVariable int id, HttpServletResponse res) {
		if (ritualServ.deleteById(id)) {
			res.setStatus(204);
		}else {
			res.setStatus(404);
		}
	}
	
	@GetMapping("ritual/{keyword}")
	public List<Ritual> findByKeyword(@PathVariable String keyword) {
		return ritualServ.findByKeyword(keyword);
	}
}
